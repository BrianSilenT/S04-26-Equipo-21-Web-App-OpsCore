package com.opscore.incident.service;


import com.opscore.incident.model.Resolucion;
import com.opscore.incident.model.Incidente;
import com.opscore.incident.model.Usuario;
import com.opscore.incident.repository.ResolucionRepository;
import com.opscore.incident.repository.IncidenteRepository;
import com.opscore.incident.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@AllArgsConstructor
@Service
public class ResolucionServiceImpl implements ResolucionService {

    private final ResolucionRepository resolucionRepository;
    private final IncidenteRepository incidenteRepository;
    private final UsuarioRepository usuarioRepository;


    @Override
    public Resolucion asignarResponsable(Long incidenteId, Long usuarioId) {
        Incidente incidente = incidenteRepository.findById(incidenteId)
                .orElseThrow(() -> new RuntimeException("Incidente no encontrado"));
        Usuario responsable = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Resolucion resolucion = new Resolucion();
        resolucion.setIncidente(incidente);
        resolucion.setResponsable(responsable);
        resolucion.setFechaAsignacion(LocalDateTime.now());

        return resolucionRepository.save(resolucion);
    }

    @Override
    public Resolucion cerrarIncidente(Long resolucionId, String descripcionSolucion) {
        Resolucion resolucion = resolucionRepository.findById(resolucionId)
                .orElseThrow(() -> new RuntimeException("Resolución no encontrada"));
        resolucion.setDescripcionSolucion(descripcionSolucion);
        resolucion.setFechaCierre(LocalDateTime.now());

        // calcular tiempo de resolución
        if (resolucion.getFechaAsignacion() != null) {
            long minutos = java.time.Duration.between(
                    resolucion.getFechaAsignacion(), resolucion.getFechaCierre()
            ).toMinutes();
            resolucion.setTiempoResolucion(minutos);
        }

        return resolucionRepository.save(resolucion);
    }
}


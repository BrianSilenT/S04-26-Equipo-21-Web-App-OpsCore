package com.opscore.incident.service;

import com.opscore.incident.model.Incidente;
import com.opscore.incident.enums.EstadoIncidente;
import com.opscore.incident.enums.Prioridad;
import com.opscore.incident.repository.IncidenteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class IncidenteServiceImpl implements IncidenteService {

    private final IncidenteRepository incidenteRepository;


    @Override
    public Incidente reportarIncidente(Incidente incidente) {
        return incidenteRepository.save(incidente);
    }

    @Override
    public List<Incidente> listarPorEstado(EstadoIncidente estado) {
        return incidenteRepository.findByEstado(estado);
    }

    @Override
    public List<Incidente> listarPorPrioridad(Prioridad prioridad) {
        return incidenteRepository.findByPrioridad(prioridad);
    }

    @Override
    public Incidente actualizarEstado(Long id, EstadoIncidente nuevoEstado) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incidente no encontrado"));
        incidente.setEstado(nuevoEstado);
        return incidenteRepository.save(incidente);
    }
}


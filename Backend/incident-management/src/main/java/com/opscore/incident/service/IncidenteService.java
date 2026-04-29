package com.opscore.incident.service;

import com.opscore.incident.model.Incidente;
import com.opscore.incident.enums.EstadoIncidente;
import com.opscore.incident.enums.Prioridad;
import java.util.List;

public interface IncidenteService {
    Incidente reportarIncidente(Incidente incidente);
    List<Incidente> listarPorEstado(EstadoIncidente estado);
    List<Incidente> listarPorPrioridad(Prioridad prioridad);
    Incidente actualizarEstado(Long id, EstadoIncidente nuevoEstado);
}

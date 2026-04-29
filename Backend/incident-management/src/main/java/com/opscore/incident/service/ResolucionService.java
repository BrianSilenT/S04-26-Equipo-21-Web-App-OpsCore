package com.opscore.incident.service;

import com.opscore.incident.model.Resolucion;

public interface ResolucionService {
    Resolucion asignarResponsable(Long incidenteId, Long usuarioId);
    Resolucion cerrarIncidente(Long resolucionId, String descripcionSolucion);
}

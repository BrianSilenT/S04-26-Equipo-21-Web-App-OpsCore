package com.opscore.incident.repository;

import com.opscore.incident.model.Incidente;
import com.opscore.incident.enums.EstadoIncidente;
import com.opscore.incident.enums.Prioridad;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IncidenteRepository extends JpaRepository<Incidente, Long> {
    List<Incidente> findByEstado(EstadoIncidente estado);
    List<Incidente> findByPrioridad(Prioridad prioridad);

    // Buscar incidentes de una máquina específica
    List<Incidente> findByEstacionId(Long estacionId);

    // Buscar incidentes por área (útil para Supervisores)
    List<Incidente> findByEstacionAreaId(Long areaId);
}
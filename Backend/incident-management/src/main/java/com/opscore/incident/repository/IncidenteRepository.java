package com.opscore.incident.repository;

import com.opscore.incident.model.Incidente;
import com.opscore.incident.enums.EstadoIncidente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncidenteRepository extends JpaRepository<Incidente, Long> {
    List<Incidente> findByEstado(EstadoIncidente estado);
    List<Incidente> findByPrioridad(com.opscore.incident.enums.Prioridad prioridad);
}

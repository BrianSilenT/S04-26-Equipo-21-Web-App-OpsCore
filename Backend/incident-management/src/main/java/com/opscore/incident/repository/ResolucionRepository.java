package com.opscore.incident.repository;

import com.opscore.incident.model.Resolucion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResolucionRepository extends JpaRepository<Resolucion, Long> {
    // Permite obtener la solución aplicada a un incidente concreto
    Optional<Resolucion> findByIncidenteId(Long incidenteId);
}

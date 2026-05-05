package com.opscore.incident.repository;

import com.opscore.incident.model.ChecklistEjecucion;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ChecklistEjecucionRepository extends JpaRepository<ChecklistEjecucion, Long> {
    // Ver historial de checklists de una máquina
    List<ChecklistEjecucion> findByEstacionIdOrderByFechaRealizacionDesc(Long estacionId);
}
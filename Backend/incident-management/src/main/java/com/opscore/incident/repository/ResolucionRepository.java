package com.opscore.incident.repository;

import com.opscore.incident.model.Resolucion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResolucionRepository extends JpaRepository<Resolucion, Long> {
}

package com.opscore.incident.repository;

import com.opscore.incident.model.RespuestaPuntoControl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RespuestaPuntoControlRepository extends JpaRepository<RespuestaPuntoControl, Long> {
    // Podrías buscar todos los fallos críticos para el Gerente
    List<RespuestaPuntoControl> findByEsCriticoTrueAndEstadoOkFalse();
}
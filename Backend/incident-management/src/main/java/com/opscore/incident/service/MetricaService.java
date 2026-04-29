package com.opscore.incident.service;

import com.opscore.incident.model.Metrica;
import java.util.List;

public interface MetricaService {
    Metrica generarMetricaSemanal();
    Metrica generarMetricaMensual();
    List<Metrica> listarMetricas();
}

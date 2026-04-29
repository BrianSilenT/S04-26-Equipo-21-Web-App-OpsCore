package com.opscore.incident.controller;


import com.opscore.incident.model.Metrica;
import com.opscore.incident.service.MetricaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/metricas")
public class MetricaController {

    private final MetricaService metricaService;


    @PostMapping("/semanal")
    public Metrica generarMetricaSemanal() {
        return metricaService.generarMetricaSemanal();
    }

    @PostMapping("/mensual")
    public Metrica generarMetricaMensual() {
        return metricaService.generarMetricaMensual();
    }

    @GetMapping
    public List<Metrica> listarMetricas() {
        return metricaService.listarMetricas();
    }
}


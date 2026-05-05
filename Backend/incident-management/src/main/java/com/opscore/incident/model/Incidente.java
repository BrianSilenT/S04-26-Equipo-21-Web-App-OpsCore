package com.opscore.incident.model;

import com.opscore.incident.enums.EstadoIncidente;
import com.opscore.incident.enums.Prioridad;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "incidentes")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Incidente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "estacion_id")
    private EstacionTrabajo estacion;

    @ManyToOne
    @JoinColumn(name = "reportado_por_id")
    private Usuario operador;

    @ManyToOne
    @JoinColumn(name = "tecnico_asignado_id")
    private Usuario tecnico;

    private String descripcion;
    private LocalDateTime fechaReporte;
    private LocalDateTime fechaCierre;

    @Enumerated(EnumType.STRING)
    private EstadoIncidente estado;

    @Enumerated(EnumType.STRING)
    private Prioridad prioridad;

    @Column(columnDefinition = "TEXT")
    private String solucionTecnica;

    @PrePersist
    protected void onCreate() {
        this.fechaReporte = LocalDateTime.now();
        if(this.estado == null) this.estado = EstadoIncidente.ABIERTO;
    }
}
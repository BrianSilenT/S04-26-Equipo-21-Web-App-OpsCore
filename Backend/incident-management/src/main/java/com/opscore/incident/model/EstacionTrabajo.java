package com.opscore.incident.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "estaciones_trabajo")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EstacionTrabajo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre; // Ej: Prensa Hidráulica 01
    private String codigo; // Ej: PH-01

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "area_id")
    private Area area;
}

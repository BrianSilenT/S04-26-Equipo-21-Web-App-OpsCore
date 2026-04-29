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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Incidente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String area;
    private String descripcion;
    private LocalDateTime fechaReporte;

    @Enumerated(EnumType.STRING)
    private EstadoIncidente estado; // ABIERTO, EN_PROCESO, CERRADO

    @Enumerated(EnumType.STRING)
    private Prioridad prioridad; // NORMAL, CRITICO

    @ManyToOne
    @JoinColumn(name = "operador_id")
    private Usuario operador;
}

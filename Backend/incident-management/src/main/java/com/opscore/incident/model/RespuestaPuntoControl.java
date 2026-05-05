package com.opscore.incident.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "respuestas_puntos_control")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RespuestaPuntoControl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "checklist_id")
    @JsonIgnore // Evita que el sistema entre en un bucle infinito al generar el JSON
    private ChecklistEjecucion checklist;

    private String descripcionPunto; // Ej: "Nivel de aceite", "Pines eléctricos"
    private Boolean esCritico;       // Si esto es falso y es crítico, generamos Incidente
    private Boolean estadoOk;        // True = OK, False = Falla

    @Column(columnDefinition = "TEXT")
    private String observaciones;    // Detalles adicionales de la falla
}
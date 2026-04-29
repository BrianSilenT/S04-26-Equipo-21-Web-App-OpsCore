package com.opscore.incident.model;

import com.opscore.incident.enums.Rol;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(unique = true)
    private String numeroReloj; // o idEmpresa

    @Enumerated(EnumType.STRING)
    private Rol rol; // OPERADOR, SUPERVISOR, TECNICO, MANAGER

    private String password; // requerido para supervisor, técnico, manager
}
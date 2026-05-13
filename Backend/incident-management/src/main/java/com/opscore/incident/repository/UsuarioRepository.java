package com.opscore.incident.repository;

import com.opscore.incident.model.Usuario;
import com.opscore.incident.enums.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByNumeroReloj(String numeroReloj);
    List<Usuario> findByRol(Rol rol);
}
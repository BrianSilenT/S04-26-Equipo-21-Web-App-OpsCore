package com.opscore.incident.service;

import com.opscore.incident.model.Usuario;
import java.util.Optional;
import java.util.List;

public interface UsuarioService {
    Usuario crearUsuario(Usuario usuario);
    Optional<Usuario> buscarPorNumeroReloj(String numeroReloj);
    List<Usuario> listarUsuarios();
}

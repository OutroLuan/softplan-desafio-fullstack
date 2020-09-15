package br.com.softplan.processos.repository;

import br.com.softplan.processos.entities.Usuario;
import br.com.softplan.processos.entities.enuns.TipoUsuarioEnum;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    Optional<Usuario> findByLoginAndSenha(String login, String senha);

    Iterable<Usuario> findAllByTipoUsuario(TipoUsuarioEnum tipoUsuario);
}

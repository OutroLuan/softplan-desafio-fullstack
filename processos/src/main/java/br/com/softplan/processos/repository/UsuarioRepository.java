package br.com.softplan.processos.repository;

import br.com.softplan.processos.entities.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
}

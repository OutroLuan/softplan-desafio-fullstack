package br.com.softplan.processos.services;

import br.com.softplan.processos.entities.Usuario;
import br.com.softplan.processos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario criar(Usuario usuario){
        return repository.save(usuario);
    }

    public void editar(Usuario usuario){
        if(usuario.getId() != null) {
            repository.save(usuario);
        }
    }

    public void deletar(String id){
        //todo try catch
        repository.deleteById(Long.parseLong(id));
    }

    public Optional<Usuario> buscarPorId(String id){
        return repository.findById(Long.parseLong(id));
    }

    public Iterable<Usuario> buscarTodos(){
        return repository.findAll();
    }
}

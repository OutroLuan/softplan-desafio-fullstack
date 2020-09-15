package br.com.softplan.processos.services;

import br.com.softplan.processos.entities.Usuario;
import br.com.softplan.processos.entities.enuns.TipoUsuarioEnum;
import br.com.softplan.processos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario criar(Usuario usuario){
        usuario.setDataInclusao(new Date());
        return repository.save(usuario);
    }

    public void editar(Usuario usuario) throws Exception {
        if(usuario.getId() == null) {
            throw new Exception("Erro ao editar registro: Sem id válido para editar");
        }
        repository.save(usuario);
    }

    public void deletar(String id) throws Exception {
        try {
            repository.deleteById(Long.parseLong(id));
        } catch (Exception e){
            throw new Exception("Erro ao deletar registro: " + e.getMessage());
        }
    }

    public Optional<Usuario> buscarPorId(String id){
        return repository.findById(Long.parseLong(id));
    }

    public Iterable<Usuario> buscarTodos(){
        return repository.findAll();
    }

    public Optional<Usuario> buscarPorLoginESenha(String login, String senha) {
        return repository.findByLoginAndSenha(login, senha);
    }

    public Iterable<Usuario> buscarTodosPorTipoUsuario(TipoUsuarioEnum tipoUsuario) {
        return repository.findAllByTipoUsuario(tipoUsuario);
    }
}

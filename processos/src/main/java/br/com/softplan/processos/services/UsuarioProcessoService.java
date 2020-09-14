package br.com.softplan.processos.services;

import br.com.softplan.processos.entities.UsuarioProcesso;
import br.com.softplan.processos.repository.UsuarioProcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UsuarioProcessoService {

    @Autowired
    private UsuarioProcessoRepository repository;

    public UsuarioProcesso criar(UsuarioProcesso usuarioProcesso){
        usuarioProcesso.setDataInclusao(new Date());
        return repository.save(usuarioProcesso);
    }

    public void editar(UsuarioProcesso usuarioProcesso) throws Exception {
        if(usuarioProcesso.getId() == null) {
            throw new Exception("Erro ao editar registro: Sem id válido para editar");
        }
        repository.save(usuarioProcesso);
    }

    public void deletar(String id) throws Exception {
        try {
            repository.deleteById(Long.parseLong(id));
        } catch (Exception e){
            throw new Exception("Erro ao deletar registro: " + e.getMessage());
        }
    }

    public Optional<UsuarioProcesso> buscarPorId(String id){
        return repository.findById(Long.parseLong(id));
    }

    public Iterable<UsuarioProcesso> buscarTodos(){
        return repository.findAll();
    }
}

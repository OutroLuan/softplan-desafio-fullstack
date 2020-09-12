package br.com.softplan.processos.services;

import br.com.softplan.processos.entities.Processo;
import br.com.softplan.processos.repository.ProcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class ProcessoService {

    @Autowired
    private ProcessoRepository repository;

    public Iterable<Processo> buscarTodos(){
        return repository.findAll();
    }

    public Optional<Processo> buscarPorId(String id){
        return repository.findById(Long.parseLong(id));
    }

    public Processo criar(Processo processo){
        processo.setDataInclusao(new Date());
        return repository.save(processo);
    }

    public void editar(Processo processo) throws Exception {
        if(processo.getId() == null){
            throw new Exception("Erro ao editar registro: Sem id válido para editar");
        }
        repository.save(processo);
    }

    public void deletar(String id) throws Exception {
        try{
        repository.deleteById(Long.parseLong(id));
        } catch (Exception e){
            throw new Exception("Erro ao deletar registro: " + e.getMessage());
        }
    }
}

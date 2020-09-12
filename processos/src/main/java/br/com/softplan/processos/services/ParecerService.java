package br.com.softplan.processos.services;

import br.com.softplan.processos.entities.Parecer;
import br.com.softplan.processos.repository.ParecerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class ParecerService {
    @Autowired
    private ParecerRepository repository;

    public Parecer criar(Parecer parecer){
        parecer.setDataInclusao(new Date());
        return repository.save(parecer);
    }

    public void editar(Parecer parecer) throws Exception {
        if(parecer.getId() == null) {
            throw new Exception("Erro ao editar registro: Sem id válido para editar");
        }
        repository.save(parecer);
    }

    public void deletar(String id) throws Exception {
        try {
            repository.deleteById(Long.parseLong(id));
        } catch (Exception e){
            throw new Exception("Erro ao deletar registro: " + e.getMessage());
        }
    }

    public Optional<Parecer> buscarPorId(String id){
        return repository.findById(Long.parseLong(id));
    }

    public Iterable<Parecer> buscarTodos(){
        return repository.findAll();
    }
}

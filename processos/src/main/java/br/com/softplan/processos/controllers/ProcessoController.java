package br.com.softplan.processos.controllers;

import br.com.softplan.processos.entities.Processo;
import br.com.softplan.processos.services.ProcessoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/processo")
public class ProcessoController {

    @Autowired
    private ProcessoService service;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Processo> buscarTodos(){
        return service.buscarTodos();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Processo> buscarPorId(@PathVariable("id") String id){
        return service.buscarPorId(id);
    }

    @RequestMapping(value = "/responsavel/{usuarioId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Processo> buscarPorResponsavel(@PathVariable("usuarioId") String usuarioId){
        return service.buscarProcessoPorResponsavel(usuarioId);
    }

    @RequestMapping(method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Processo criar(@RequestBody Processo processo){
        return service.criar(processo);
    }

    @RequestMapping(method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void editar(@RequestBody Processo processo) throws Exception {
        service.editar(processo);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletar(@PathVariable("id") String id) throws Exception {
        service.deletar(id);
    }


}

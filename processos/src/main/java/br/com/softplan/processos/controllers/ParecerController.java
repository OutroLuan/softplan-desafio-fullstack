package br.com.softplan.processos.controllers;

import br.com.softplan.processos.entities.Parecer;
import br.com.softplan.processos.services.ParecerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/parecer")
public class ParecerController {
    @Autowired
    private ParecerService service;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Parecer> buscarTodos(){
        return service.buscarTodos();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Parecer> buscarPorId(@PathVariable("id") String id){
        return service.buscarPorId(id);
    }

    @RequestMapping(method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Parecer criar(@RequestBody Parecer parecer){
        return service.criar(parecer);
    }

    @RequestMapping(method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void editar(@RequestBody Parecer parecer) throws Exception {
        service.editar(parecer);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletar(@PathVariable("id") String id) throws Exception {
        service.deletar(id);
    }
}

package br.com.softplan.processos.controllers;

import br.com.softplan.processos.entities.UsuarioProcesso;
import br.com.softplan.processos.services.UsuarioProcessoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuarioProcesso")
public class UsuarioProcessoController {

    @Autowired
    private UsuarioProcessoService service;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<UsuarioProcesso> buscarTodos(){
        return service.buscarTodos();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<UsuarioProcesso> buscarPorId(@PathVariable("id") String id){
        return service.buscarPorId(id);
    }

    @RequestMapping(method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public UsuarioProcesso criar(@RequestBody UsuarioProcesso usuarioProcesso){
        return service.criar(usuarioProcesso);
    }

    @RequestMapping(method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void editar(@RequestBody UsuarioProcesso usuarioProcesso) throws Exception {
        service.editar(usuarioProcesso);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletar(@PathVariable("id") String id) throws Exception {
        service.deletar(id);
    }

}

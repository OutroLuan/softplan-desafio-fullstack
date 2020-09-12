package br.com.softplan.processos.repository;

import br.com.softplan.processos.entities.Processo;
import org.springframework.data.repository.CrudRepository;

public interface ProcessoRepository extends CrudRepository<Processo,Long> {
}

package br.com.softplan.processos.repository;

import br.com.softplan.processos.entities.Parecer;
import br.com.softplan.processos.entities.Processo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ParecerRepository extends CrudRepository<Parecer, Long> {
    @Query(value="select p.* from parecer p where p.processo_id = :processoId", nativeQuery = true)
    Iterable<Parecer> findByProcessoId(Integer processoId);
}

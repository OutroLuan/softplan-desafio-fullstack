package br.com.softplan.processos.repository;

import br.com.softplan.processos.entities.Processo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ProcessoRepository extends CrudRepository<Processo,Long>{
    @Query(value="select p.* from processo p join usuario_processo up on (p.id = up.processo_id) where up.usuario_id = :usuarioId", nativeQuery = true)
    public Iterable<Processo> findProcessosJoinUsuarioProcessosByUsuarioId(@Param("usuarioId") Integer usuarioId);
}

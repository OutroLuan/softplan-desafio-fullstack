package br.com.softplan.processos.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
public class UsuarioProcesso implements Serializable {

    private static final long serialVersionUID = -9132312391347834448L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private Usuario responsavel;

    @OneToOne
    @JoinColumn(name = "processo_id")
    private Processo processo;

    private Date dataInclusao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Usuario responsavel) {
        this.responsavel = responsavel;
    }

    public Processo getProcesso() {
        return processo;
    }

    public void setProcesso(Processo processo) {
        this.processo = processo;
    }

    public Date getDataInclusao() {
        return dataInclusao;
    }

    public void setDataInclusao(Date dataInclusao) {
        this.dataInclusao = dataInclusao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UsuarioProcesso)) return false;
        UsuarioProcesso that = (UsuarioProcesso) o;
        return id.equals(that.id) &&
                responsavel.equals(that.responsavel) &&
                processo.equals(that.processo) &&
                dataInclusao.equals(that.dataInclusao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, responsavel, processo, dataInclusao);
    }
}

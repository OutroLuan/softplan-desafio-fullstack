package br.com.softplan.processos.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class Parecer implements Serializable {

    private static final long serialVersionUID = -8456050936550409977L;

    private Long id;

    private Usuario usuario;

    private String parecer;

    private Date dataInclusao;

    private Processo processo;

    public Parecer(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getParecer() {
        return parecer;
    }

    public void setParecer(String parecer) {
        this.parecer = parecer;
    }

    public Date getDataInclusao() {
        return dataInclusao;
    }

    public void setDataInclusao(Date dataInclusao) {
        this.dataInclusao = dataInclusao;
    }

    public Processo getProcesso() {
        return processo;
    }

    public void setProcesso(Processo processo) {
        this.processo = processo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Parecer)) return false;
        Parecer parecer1 = (Parecer) o;
        return id.equals(parecer1.id) &&
                usuario.equals(parecer1.usuario) &&
                parecer.equals(parecer1.parecer) &&
                dataInclusao.equals(parecer1.dataInclusao) &&
                processo.equals(parecer1.processo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, usuario, parecer, dataInclusao, processo);
    }
}

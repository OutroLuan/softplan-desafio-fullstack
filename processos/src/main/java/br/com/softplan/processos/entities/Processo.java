package br.com.softplan.processos.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class Processo implements Serializable {

    private static final long serialVersionUID = -5745243217363373302L;

    private Long id;

    private String nome;

    private String descricao;

    private Date dataInclusao;

    private List<Usuario> responsaveis;

    public Processo (){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDataInclusao() {
        return dataInclusao;
    }

    public void setDataInclusao(Date dataInclusao) {
        this.dataInclusao = dataInclusao;
    }

    public List<Usuario> getResponsaveis() {
        return responsaveis;
    }

    public void setResponsaveis(List<Usuario> responsaveis) {
        this.responsaveis = responsaveis;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Processo)) return false;
        Processo processo = (Processo) o;
        return id.equals(processo.id) &&
                nome.equals(processo.nome) &&
                Objects.equals(descricao, processo.descricao) &&
                dataInclusao.equals(processo.dataInclusao) &&
                Objects.equals(responsaveis, processo.responsaveis);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, descricao, dataInclusao, responsaveis);
    }
}

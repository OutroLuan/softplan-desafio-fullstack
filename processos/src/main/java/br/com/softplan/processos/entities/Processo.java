package br.com.softplan.processos.entities;

import java.util.Date;
import java.util.List;

public class Processo {

    private String nome;

    private String descricao;

    private Date dataInclusao;

    private List<Usuario> responsaveis;


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
}

package br.com.softplan.processos.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
public class Processo implements Serializable {

    private static final long serialVersionUID = -5745243217363373302L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private Date dataInclusao;


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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Processo)) return false;
        Processo processo = (Processo) o;
        return id.equals(processo.id) &&
                nome.equals(processo.nome) &&
                Objects.equals(descricao, processo.descricao) &&
                dataInclusao.equals(processo.dataInclusao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, descricao, dataInclusao);
    }
}

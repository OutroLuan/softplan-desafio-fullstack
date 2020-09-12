package br.com.softplan.processos.entities;

import br.com.softplan.processos.entities.enuns.TipoUsuarioEnum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity(name = "USUARIO")
public class Usuario  implements Serializable {

    private static final long serialVersionUID = 6613650569189356586L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String login;

    private String nome;

    private String senha;

    private String email;

    private TipoUsuarioEnum tipoUsuario;

    private Date dataInclusao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public TipoUsuarioEnum getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(TipoUsuarioEnum tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
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
        if (!(o instanceof Usuario)) return false;
        Usuario usuario = (Usuario) o;
        return id.equals(usuario.id) &&
                login.equals(usuario.login) &&
                nome.equals(usuario.nome) &&
                senha.equals(usuario.senha) &&
                email.equals(usuario.email) &&
                tipoUsuario == usuario.tipoUsuario &&
                dataInclusao.equals(usuario.dataInclusao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, login, nome, senha, email, tipoUsuario, dataInclusao);
    }
}

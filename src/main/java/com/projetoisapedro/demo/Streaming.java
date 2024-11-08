package com.projetoisapedro.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Streaming{
    @Id
    @GeneratedValue
    private long id;
    private String nome;
    private double mensalidade;

    public Streaming() {}
    public void setId(long id) {this.id = id;}
    public long getId() { return id; }
    public void setNome(String n) {nome = n;}
    public String getNome() { return nome; }
    public void setMensalidade(double m) { mensalidade = m;}
    public double getMensalidade() { return mensalidade;}

}

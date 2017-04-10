package com.apim.server.entities;


/**
 * Created on 06/04/2017.
 */
public class Categoria {
    String nome;

    Categoria(){
        nome="";
    }

    Categoria(String n){
        nome=n;
    }

    Categoria(Categoria c){
        nome= c.nome;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

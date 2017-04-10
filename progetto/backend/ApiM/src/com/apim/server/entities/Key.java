package com.apim.server.entities;

import java.util.Date;

/**
 * Created on 06/04/2017.
 */
public class Key {
    String id;
    Date dataScadenza;
    double maxByte, tempoUso;

    Key(){
        id="";
        dataScadenza=null;
        maxByte=0;
        tempoUso=0;
    }

    Key(String i, Date d, double m, double t){
        id=i;
        dataScadenza=d;
        maxByte=m;
        tempoUso=t;
    }

    Key(Key k){
        id= k.id;
        dataScadenza=k.dataScadenza;
        maxByte=k.maxByte;
        tempoUso=k.tempoUso;
    }

    public Date getDataScadenza() {
        return dataScadenza;
    }

    public double getMaxByte() {
        return maxByte;
    }

    public double getTempoUso() {
        return tempoUso;
    }

    public String getId() {
        return id;
    }

    public void setDataScadenza(Date dataScadenza) {
        this.dataScadenza = dataScadenza;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setMaxByte(double maxByte) {
        this.maxByte = maxByte;
    }

    public void setTempoUso(double tempoUso) {
        this.tempoUso = tempoUso;
    }
}

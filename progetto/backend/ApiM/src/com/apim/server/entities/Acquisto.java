package com.apim.server.entities;


/**
 * Created on 06/04/2017.
 */
public class Acquisto {
    User user;
    API api;

    Acquisto(User u, API a){
        user = u;
        api = a;
    }

    Acquisto(Acquisto a){
        user = a.user;
        api= a.api;
    }

    public API getApi() {
        return api;
    }

    public User getUser() {
        return user;
    }

    public void setApi(API api) {
        this.api = api;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

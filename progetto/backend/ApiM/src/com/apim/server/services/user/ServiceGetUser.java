package com.apim.server.services;

import com.apim.server.entities.User;
import com.apim.server.dao;

/**
 * Created by Pigiu on 10/04/2017.
 */
public class ServiceGetUser {
    public User getUser(String id){
        //il metodo ritorna tutte le informazioni riguardanti l'utente con l'id che corrisponde alla stringa passata
        //se non esiste alcun utente con tale id, viene ritornato un puntatore null

        //attraverso la classe DAO effetuo una chiamata al database, dando in input l'id dell'utente ricevo tutte le
        // informazioni a lui riguardanti

        User u= new User(new DAOUser.getUser(id));

        return u;
    }
}

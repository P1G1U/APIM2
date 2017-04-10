package com.apim.server.services;

import com.apim.server.dao;

/**
 * Created by Pigiu on 10/04/2017.
 */
public class ServiceDeleteUser {
    public boolean deleteUser(String id){
        //il metodo rimuove dal DB l'utente che possiede l'id passato, se non esiste alcun utente con tale id nel DB il metodo ritorna false
        return DAOUser.deleteUser(id);
    }
}

package com.apim.server.services.user;

import com.apim.server.entities.User;
import com.apim.server.dao;

/**
 * Created by Pigiu on 10/04/2017.
 */
public class ServicePutUser {
    public boolean putUser(User u){
        //il metodo inserisce un nuovo user nel DB, se l'operazione va a buon fine viene ritornato un valore true, altrimenti fals

        return DAOUser.putUser(u);
    }
}

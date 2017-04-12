package com.apim.server.services.user;

import  jolie.runtime.JavaService;
import com.apim.server.entities.User;

/**
 * Created by Pigiu on 04/04/2017.
 */

public class ServiceUserManager extends JavaService {
    private ServiceGetUser gU;
    private ServicePutUser pU;
    private ServiceUpdateUser uU;
    private ServiceDeleteUser dU;

    public User getUser(String id){
        return gU.getUser(id);
    }

    public boolean putUser(User u){
        return pU.putUser(u);
    }

    public User updateUser(User u){
        return uU.updateUser(u);
    }

    public boolean deleteUser(String id){
        return dU.deleteUser(id);
    }
}

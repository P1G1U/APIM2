import com.apim.server.services;

import com.apim.server.dao;
import com.apim.server.entities.User;

/**
 * Created by Pigiu on 10/04/2017.
 */
public class ServiceUpdateUser {
    public User updateUser(User u){
        //il metodo aggiorna le informazioni riguardanti un utente
        return DAOUser.updateUser(u);
    }
}

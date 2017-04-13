/**
 * Created by Utente on 12/04/2017.
 */
package com.apim.server.dao;
import com.apim.server.dao;
public interface IDAOUser {
    public User load(varchar username);
    public User save(User user);
    public User updat(User user);
    public User remove (User user);
}

/**
 * Created by Utente on 12/04/2017.
 */
package com.apim.server.dao;
import com.apim.serve.dao;
public interface IDAOKey {
    public Key load(Varchar Key);
    public Key save(Key key);
    public Key update(Key key);
    public Key remove(Key key);
}

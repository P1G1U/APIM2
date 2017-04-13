/**
 * Created by Utente on 12/04/2017.
 */
package com.apim.server.dao;
import com.apim.server.dao;
public interface IDAOComment {
    public Comment load(Integer IdComment);
    public Comment save(Comment comment);
    public Comment update(Comment comment);
    public Comment remove(Comment comment);
}

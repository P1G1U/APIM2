/**
 * Created by Utente on 12/04/2017.
 */
import com.apim.server.dao;
import javax.persistence.EntityManager;
public class DAOKey implements IDAOKey{
    private EntityManager em;
    public void remove(Key key){
        em.remove(Key);
    }
    public Key load(string key){
        return em.find(Key.class key);
    }
    public Key save (Key key){
        em.persist(Key);
        return Key;
    }
    public Key update(Key key){
        return em.merge(Key);
    }
    public void setEM(EntityManager em){
        this.em = em;
    }
    public EntityManager getEm(){
        return em;
    }
}

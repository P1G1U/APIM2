/**
 * Created by Utente on 12/04/2017.
 */
import com.apim.server.dao;
import javax.persistence.EntityManager;
public class DAOPeople implements IDAOPeople {
    private EntityManager em;
    public void remove(User user){
        em.remove(User);
    }
    public User load(string username){
        return em.find(User.class username);
    }
    public User save(User user){
        em.persist(User);
        return User;
    }
    public User update (User user){
        return em.merge(User);
    }
    public void setEm(EntityManager em){
        this.em = em;
    }
    public EntityManager getEm(){
        return em;
    }
}

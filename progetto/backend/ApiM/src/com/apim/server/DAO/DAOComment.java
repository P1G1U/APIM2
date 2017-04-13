/**
 * Created by Utente on 12/04/2017.
 */
import com.apim.server.dao;
import javax.persistence.EntityManager;

public class DAOComment implements IDAOComment {
    private EntityManager em;
    public void remove(Comment comment){
        em.remove(Comment);
    }
    public Comment load(Integer IdComment){
        return em.find(Comment.class, IdComment);
    }
    public Comment save(Comment comment){
        em.persist(Comment);
        return Comment;
    }
    public Comment update(Comment comment){
        return em.merge(Comment);
    }
    public void setEm(EntityManager em){
        this.em = em;
    }
    public EntityManager getEM(){
        return em;
    }
}

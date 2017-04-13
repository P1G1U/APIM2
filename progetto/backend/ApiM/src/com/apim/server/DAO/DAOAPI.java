/**
 * Created by Utente on 12/04/2017.
 */
package com.apim.server.dao;
import com.apim.server.dao;
import javax.persistence.EntityManager;


public class DAOAPI implements IDAOAPI {
    private EntityManager em;
    public void remove (API API)
        em.remove(API);
    }
    public API load(string NomeAPI) {
        return em.find(API.class,nomeAPI);
    }
    public API save(API API){
        em.persist(API);
        return API;
    }
    public API update(API API){
        return em.merge(API);
        }
    public void setEm(EntityManager em){
        this.em = em;
    }
    public EntityManager getEm(){
        return em;
        }
}

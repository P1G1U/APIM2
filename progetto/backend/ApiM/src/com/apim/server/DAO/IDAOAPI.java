/**
 * Created by Utente on 12/04/2017.
 */
package com.apim.server.dao;
import com.apim.server.dao;
public interface IDAOAPI {
    public API load(Varchar NomeAPI);
    public API save(API API);
    public API update(API API);
    public API remove(API API);
}

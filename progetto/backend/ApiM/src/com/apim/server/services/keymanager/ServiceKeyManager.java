package com.apim.server.services;

import jolie.runtime.JavaService;

/**
 * Created by alberto on 04/04/17.
 */
public class ServiceKeyManager extends JavaService {
    private ServiceCheckKey kc;
    private ServiceKeyGen kg;

    public String newKey () {
        return kg.newKey();
    }

    public boolean checkKey (String k) {
        return kc.checkKey(k);
    }
}

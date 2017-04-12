package com.apim.server.services;

import com.apim.server.utilities.Encrypter;

/**
 * Created by alberto on 04/04/17.
 */
class ServiceKeyGen {
    String newKey() {
        //String s = getUserString + getApiString
        String s = "Hello";
        s = Encrypter.md5(s);
        return s;
    }
}

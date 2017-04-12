package com.apim.server.utilities;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by alberto on 12/04/17.
 */
public class CourierGenerator {
    private static final String PATH = "./my/path";
            // TODO Load info from DB, remove placeholders

    private static String readFile(String path, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return new String(encoded, encoding);
    }

    private static void writeCourierFile(String apiName, String newText) throws FileNotFoundException {
        try(  PrintWriter out = new PrintWriter( APIINTERFACEFILENAME )  ){
            out.println( newText );
        }
    }

    private static String replaceInCourierTemplate(String apiName, String template) throws IOException {
        String res = template.replace("apiName", apiName);
        res = res.replace("{{APIINTERFACEFILENAME}}",APIINTERFACEFILENAME);
        res = res.replace("{{APIPORTNAME}}", APIPORTNAME);
        res = res.replace("{{APIINTERFACENAME}}", APIINTERFACENAME);
        return res;
    }

    public static void generate() {
        // read template file
        String template = null;
        try {
            template = readFile(PATH, StandardCharsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // replace placeholders with appropriate info
        String res = null;
        try {
            res = replaceInCourierTemplate(APINAME, template);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // write courier string to file
        try {
            writeCourierFile(APINAME, res);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}

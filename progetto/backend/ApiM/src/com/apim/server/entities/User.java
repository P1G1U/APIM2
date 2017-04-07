import com.sun.xml.internal.ws.api.ha.StickyFeature;

import java.util.Date;

/**
 * Created by Pigiu on 06/04/2017.
 */
public class User {
    String username, password, nome, cognome, mail, numeroCarta, indirizzo, telefono, fotoProfilo, bio;
    double saldoCoin;
    boolean admin;
    Date dataNascita;

    User(){
        username="";
        password="";
        nome="";
        cognome="";
        dataNascita=null;
        mail="";
        numeroCarta="";
        indirizzo="";
        telefono="";
        fotoProfilo="";
        bio="";
        saldoCoin=0;
        admin=false;
    }

    User(String u, String p, String n, String c, Date d, String m, String nc, String i, String t, String f, String b, double s, boolean a){
        username=u;
        password=p;
        nome=n;
        cognome=c;
        dataNascita=d;
        mail=m;
        numeroCarta=nc;
        indirizzo=i;
        telefono=t;
        fotoProfilo=f;
        bio=b;
        saldoCoin=s;
        admin=a;
    }

    User(User u){
        username=u.username;
        password=u.password;
        nome=u.nome;
        cognome=u.cognome;
        dataNascita=u.dataNascita;
        mail=u.mail;
        numeroCarta=u.numeroCarta;
        indirizzo=u.indirizzo;
        telefono=u.telefono;
        fotoProfilo=u.fotoProfilo;
        bio=u.bio;
        saldoCoin=u.saldoCoin;
        admin=u.admin;
    }

    public String getUsername(){
        return username;
    }

    public boolean isAdmin() {
        return admin;
    }

    public String getBio() {
        return bio;
    }

    public String getCognome() {
        return cognome;
    }

    public String getFotoProfilo() {
        return fotoProfilo;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public double getSaldoCoin() {
        return saldoCoin;
    }

    public String getMail() {
        return mail;
    }

    public String getNome() {
        return nome;
    }

    public String getNumeroCarta() {
        return numeroCarta;
    }

    public String getPassword() {
        return password;
    }

    public String getTelefono() {
        return telefono;
    }

    public Date getDataNascita() {
        return dataNascita;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setDataNascita(Date dataNascita) {
        this.dataNascita = dataNascita;
    }

    public void setFotoProfilo(String fotoProfilo) {
        this.fotoProfilo = fotoProfilo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setNumeroCarta(String numeroCarta) {
        this.numeroCarta = numeroCarta;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setSaldoCoin(double saldoCoin) {
        this.saldoCoin = saldoCoin;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

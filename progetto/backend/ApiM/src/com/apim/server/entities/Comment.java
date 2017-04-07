/**
 * Created by Pigiu on 06/04/2017.
 */
public class Comment {
    String testo;
    int rate;

    Comment(){
        testo="";
        rate=0;
    }

    Comment(String t, int r){
        testo=t;
        rate=r;
    }

    Comment(Comment c){
        testo=c.testo;
        rate=c.rate;
    }

    public int getRate() {
        return rate;
    }

    public String getTesto() {
        return testo;
    }

    public void setTesto(String testo) {
        this.testo = testo;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }
}

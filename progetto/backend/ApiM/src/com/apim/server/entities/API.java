/**
 * Created by Pigiu on 06/04/2017.
 */
public class API {
    String nome, linkFile, linkPDF;
    int numVoti, totaleChiamate;
    double rateMedio, tempoMedioRisposta, traffico, tempoRispostaTotale;

    API(){
        nome="";
        linkFile="";
        linkPDF="";
        numVoti=0;
        totaleChiamate=0;
        rateMedio=0;
        tempoMedioRisposta=0;
        traffico=0;
        tempoRispostaTotale=0;
    }

    API(String n, String lF, String lP, int nV, int tC, double rM, double tR, double t, double tT){
        nome=n;
        linkFile=lF;
        linkPDF=lP;
        numVoti=nV;
        totaleChiamate=tC;
        rateMedio=rM;
        tempoMedioRisposta=tR;
        traffico=t;
        tempoRispostaTotale=tT;
    }

    API(API a){
        nome=a.nome;
        linkFile=a.linkFile;
        linkPDF=a.linkPDF;
        numVoti=a.numVoti;
        totaleChiamate=a.totaleChiamate;
        rateMedio=a.rateMedio;
        tempoMedioRisposta=a.tempoMedioRisposta;
        traffico=a.traffico;
        tempoRispostaTotale=a.tempoRispostaTotale;
    }

    public String getNome() {
        return nome;
    }

    public double getRateMedio() {
        return rateMedio;
    }

    public double getTempoMedioRisposta() {
        return tempoMedioRisposta;
    }

    public double getTempoRispostaTotale() {
        return tempoRispostaTotale;
    }

    public double getTraffico() {
        return traffico;
    }

    public int getNumVoti() {
        return numVoti;
    }

    public int getTotaleChiamate() {
        return totaleChiamate;
    }

    public String getLinkFile() {
        return linkFile;
    }

    public String getLinkPDF() {
        return linkPDF;
    }

    public void setLinkFile(String linkFile) {
        this.linkFile = linkFile;
    }

    public void setLinkPDF(String linkPDF) {
        this.linkPDF = linkPDF;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setNumVoti(int numVoti) {
        this.numVoti = numVoti;
    }

    public void setRateMedio(double rateMedio) {
        this.rateMedio = rateMedio;
    }

    public void setTempoMedioRisposta(double tempoMedioRisposta) {
        this.tempoMedioRisposta = tempoMedioRisposta;
    }

    public void setTempoRispostaTotale(double tempoRispostaTotale) {
        this.tempoRispostaTotale = tempoRispostaTotale;
    }

    public void setTotaleChiamate(int totaleChiamate) {
        this.totaleChiamate = totaleChiamate;
    }

    public void setTraffico(double traffico) {
        this.traffico = traffico;
    }
}

import { Component } from '@angular/core';

@Component({
  selector : 'jumbotron',
  templateUrl : 'jumbotron.component.html'
})

export class JumbotronComponent {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  costructor(){
      this.jbtHeading = "Welcome to API Market of Microservices";
      this.jbtText = 'qua ci scriviamo qualcosa di descrizione del progetto';
      this.jbtBtnText = "Read More";
      this.jbtBtnUrl = 'http://jolie-lang.org';
  }
}

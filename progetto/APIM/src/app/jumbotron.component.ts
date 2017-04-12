import { Component } from '@angular/core';

@Component({
  selector : 'jumbotron',
  templateUrl : 'jumbotron.component.html'

})

export class JumbotronComponent {
  jbtHeading = "Welcome to API Market of Microservices";
  jbtText = "qua ci scriviamo qualcosa di descrizione del progetto";
  jbtBtnText = "Read More";
  jbtBtnUrl = "http://jolie-lang.org";
}

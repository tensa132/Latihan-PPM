import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  printPola(angkaPara, pangkatPara) {
    let angka = angkaPara;
    let pangkat = pangkatPara;
    
  }
}

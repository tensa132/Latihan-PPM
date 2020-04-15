import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  hasil = 0;
  printPola(angkaPara, pangkatPara) {
    let angka = parseInt(angkaPara);
    let pangkat = parseInt(pangkatPara);
    
    this.hasil = Math.pow(angka, pangkat);
    alert(typeof(angka));
  }
}

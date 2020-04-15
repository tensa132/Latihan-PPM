import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  hasil = 0;
  print = "";
  output = "";
  printPola(angkaPara, pangkatPara) {
    let angka = parseInt(angkaPara);
    let pangkat = parseInt(pangkatPara);
    this.hasil = Math.pow(angka, pangkat);
    if(this.hasil % 2 == 0) {
      this.print += "PolaB <br>";
      for(let i = pangkat; i <= this.hasil; i++) {
        for(let j = 0; j < i; j++) {
          this.print += "*";
        }
        this.print += "<br>";
      }
      this.print += "<br>";
      this.output = this.print;
    }
    else {
      let coPangkat = pangkat;
      this.print += "PolaA <br>";
      for(let i = 0, coAngka = 1; i < pangkat; i++, coPangkat--, coAngka++) {
        for(let j = 0; j < coPangkat; j++) {
          this.print += "*";
        }
        if(coAngka <= angka) {
          for(let k = 0; k < coAngka; k++) {
            this.print += "O";
          }
        }
        this.print += "<br>";
      }
      this.print += "<br>";
      this.output = this.print;
    }
  }
}

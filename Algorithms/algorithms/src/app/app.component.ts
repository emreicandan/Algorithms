import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'algorithms';
  sonuc = ""

  a:number=0
  b:number=0
  c:number=0
  d:number=0
  isRectangle(){
    if(this.a+this.b==this.c+this.d){
      this.sonuc="Karedir"
    }else{
      this.sonuc="Kare değildir"
    }
    return this.sonuc
  }

  //////////////////////////////

  r:number=0
  pi=3.14;
  calculateArea(){
    let area = this.pi*(this.r*this.r);

    return area
  }
}

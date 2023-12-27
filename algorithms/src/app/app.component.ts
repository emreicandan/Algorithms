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

  arr:number[]=[]
  sayi:number=10;
   findPrimeNumber(){
    while(this.sayi<100){
      this.sayi++
      if(this.sayi%2!=0 && this.sayi%3!=0 && this.sayi%5!=0&&this.sayi%7!=0){
        this.arr.push(this.sayi)
      }
    }
  }

  sayac:number=1;
  tek:number=0;
  cift:number=0;
  cevap:any=0;
  nOp(){
    let sonuc:any = 0
    while(this.sayac<500){
      this.sayac++
      if(this.sayac%2==0){
        this.cift+=this.sayac
      }else{
        this.tek+=this.sayac
      }
    }
    sonuc =this.cift-this.tek
    this.cevap=sonuc>0?`Sonuç :${sonuc} Çifttir`:`Sonuç:${sonuc} Tektir`
  };









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

  /////////////////////////
  n:number=0
  isPerfectNumber(){
    let sayac:number=0;
    let x:number=0;
    while(sayac<this.n){
      if(this.n%sayac==0){
        x+=sayac
      }
      sayac++
    }
    return this.n*2==this.n+x?"Mükemmel sayıdır." : `Mükemmel sayı değildir.`
  }
  ////////////////////////////
  arr1:number[]=[1,10,2,30,3,15,4,5,12]
  arr2:number[]=[2,3,5,30,12,4]
  findingPartners(){
    let newArr:number[]=[]
    for(let i = 0 ; i < this.arr1.length;i++){
      for(let j =0 ; j < this.arr2.length;j++){
        if(this.arr1[i]==this.arr2[j]){
          newArr.push(this.arr1[i])
        }
      }
    }
    return newArr
  }
  ///////////////////////////////
  value:number=0
  multiplication(){
    let table:number[]=[];
    for(let i =1;i<=10;i++){
      table.push(this.value*i)
    }
    return this.value==0?[]:table
  }

}

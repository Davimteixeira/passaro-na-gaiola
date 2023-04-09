import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public nome: string = 'prender'
  public marginLeft: string =  '1%'
  public backImage: string = 'none'
  public visibilityHidden!: string
  public portaTop: string = '337px'
  public portaLeft: string = '24.2%'
  public portaRotate: string = 'rotate(120deg)'

  public magica() {
    if(this.marginLeft == '1%'){
    this.nome = 'soltar'
    this.marginLeft = '40%';
    this.backImage = 'url(../../assets/images/passaro.png)'
    this.visibilityHidden = 'hidden'
    this.portaTop = '265px'
    this.portaLeft = '59.1%'
    this.portaRotate = 'rotate(0deg)'

  }else{
    this.nome = 'prender'
    this.marginLeft = '1%'
    this.backImage = 'none'
    this.visibilityHidden = ''
    this.portaTop = '337px'
    this.portaLeft = '24.2%'
    this.portaRotate = 'rotate(120deg)'

  }

  }
  constructor() {}

  ngOnInit(): void {}

}

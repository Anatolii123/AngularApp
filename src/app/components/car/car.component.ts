import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors: Colors;
  options:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car:'Белый',
      salon:'Чёрный',
      wheels:'Серебристый'
    };
    this.options = ["ABS","Автопилот","Автопаркинг"];
  }
}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}

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
      salon:'Бежевый',
      wheels:'Серебристый'
    };
    this.options = ["ABS","Автопилот","Автопаркинг"];
  }

  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car:'Синий',
        salon:'Белый',
        wheels:'Красный'
      };
      this.options = ["ABS","Автопилот","Автопаркинг"];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car:'Белый',
        salon:'Бежевый',
        wheels:'Серебристый'
      };
      this.options = ["ABS","Автопилот","Автопаркинг"];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car:'Чёрный',
        salon:'Чёрный',
        wheels:'Чёрный'
      };
      this.options = ["ABS","Автопилот","Автопаркинг"];
    }
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i,1);
        break;
      }
    }
  }

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}

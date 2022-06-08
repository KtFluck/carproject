import { Component } from '@angular/core';
import { CarService } from './service/carservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (public carService: CarService) {};
  title = 'Place4Cars'; //shows on web tab
}

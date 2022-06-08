import { Injectable } from "@angular/core";
import { Car } from "../model/car";

@Injectable({
    providedIn: 'root'
})
export class CarService {
    public carsArray: Car[] = [
        {id: 1, make: 'Ford', model: 'Fiesta'},
        {id: 2, make: 'Honda', model: 'CRV'}
    ]
}
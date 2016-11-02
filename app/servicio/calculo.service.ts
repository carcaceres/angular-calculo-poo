import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import {URLSearchParams} from '@angular/http';
import { Observable } from "rxjs/Observable";
import {Circulo} from '../model/circulo';
import {Figura} from '../model/figura';
import {Rectangulo} from '../model/rectangulo';
import {Servicio} from '../model/servicio';



@Injectable()
export class CalculoServicio{
	public servicio:Serviciable;
	
	constructor(){
		this.servicio = new Servicio();
		}

	getAreaCirculo(radio:number){
		return this.servicio.getAreaCirculo(radio);
	}
    getAreaRectangulo(base:number,altura:number){
       
       return this.servicio.getAreaRectangulo(base,altura);

    }



}
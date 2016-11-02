import {Component} from '@angular/core';
import {Circulo} from '../model/circulo';
import {Figura} from '../model/figura';
import {Rectangulo} from '../model/rectangulo';
import {CalculoServicio} from '../servicio/calculo.service';

@Component({
    selector: 'figura-componente',
    templateUrl: "app/vista/calculo.html",
    providers:[CalculoServicio]
    

})
export class FigurasComponent{

public base:number;
public altura:number;
public radio:number;
public areaC:number;
public areaR:number;

  constructor(private _servicio: CalculoServicio){
  	 this.radio=44;
     this.areaCirculo();
     this.base=10;
     this.altura=10;
     this.areaRectangulo();

  }

public areaCirculo(){
	this.areaC=this._servicio.getAreaCirculo(this.radio);
}

public areaRectangulo(){
	this.areaR=this._servicio.getAreaRectangulo(this.base,this.altura);

}


}
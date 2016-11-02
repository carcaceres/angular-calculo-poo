import {Circulo} from '../model/circulo';
import {Figura} from '../model/figura';
import {Rectangulo} from '../model/rectangulo';

export class Servicio implements Serviciable{
	
    public circulo:Circulo;
	public rectangulo:Rectangulo;

	constructor(){
		this.circulo = new Circulo();
		this.rectangulo = new Rectangulo();
	}

	 getAreaRectangulo(base:number,altura:number){
      this.rectangulo.base=base;
      this.rectangulo.altura=altura;       
      return this.rectangulo.area();

    }

	getAreaCirculo(radio:number){
		this.circulo.radio=radio;
		return this.circulo.area();
	}
   


}
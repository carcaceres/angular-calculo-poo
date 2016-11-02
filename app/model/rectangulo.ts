import {Component} from '@angular/core';
import {Figura} from "../model/figura";

export class Rectangulo extends Figura{

private  _altura:number;
private _base:number;

public get base():number{
return this._base;
}
public set base(base:number){
this._base=base;
}

public get altura():number{
	return this._altura;
}

public set altura(altura:number){
	this._altura=altura;
}

public area() : number{

return (this._base*this._altura);

}




}
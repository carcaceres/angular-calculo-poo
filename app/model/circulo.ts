import {Figura} from "../model/figura";
import {Component} from '@angular/core';

export class Circulo extends Figura{

private  _PI: number;
private _radio:number;

public get radio():number{
return this._radio;
}
public set radio(radio:number){
this._radio=radio;
}

public area() : number{
	this._PI=3.1416;
return this._radio*this._radio*this._PI;
}

}
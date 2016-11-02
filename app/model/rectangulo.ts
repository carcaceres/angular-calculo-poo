import {Figura} from "../model/figura";

export class Rectangulo extends Figura{

private  _base:number;
private _altura:number;

public get base():number{
return this._base;
}
public set base(base:number){
this._base=base;
}

public get altura():number{
return this._base;
}
public set altura(base:number){
this._base=base;
}


protected area() : number{
return this.base*this._altura;
}

}
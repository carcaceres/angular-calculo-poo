// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template:'<figura-componente></figura-componente>'
        
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }

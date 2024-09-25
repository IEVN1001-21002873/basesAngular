import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})

export class DistanciaComponent implements OnInit{
  formulario!: FormGroup;
  resultado:number = 0;
constructor() {}
ngOnInit(): void {
  
  this.formulario=new FormGroup({
    coordenada1x: new FormControl('',Validators.required),
    coordenada1y: new FormControl('',Validators.required),
    coordenada2x: new FormControl('',Validators.required),
    coordenada2y: new FormControl('',Validators.required)

  })
}
Calcular():void{
  const coordenada1x= this.formulario.get('coordenada1x')?.value;
  const coordenada1y= this.formulario.get('coordenada2y')?.value;
  const coordenada2x= this.formulario.get('coordenada1x')?.value;
  const coordenada2y= this.formulario.get('coordenada2x')?.value;

  this.resultado=((coordenada1x-coordenada2x)^2+(coordenada1y-coordenada2y)^2)^-(1/2);
}
}

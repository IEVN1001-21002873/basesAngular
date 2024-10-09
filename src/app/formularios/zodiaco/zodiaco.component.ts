import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  edad: number | null = null;
  signoChino: string = '';
  signoImagen: string = '';

  
  signosChinosImagenes: { [key: string]: string } = {
    'Rata': 'https://thumbs.dreamstime.com/z/signo-de-rata-zodiaco-chino-rat-zodiac-en-color-rojo-y-blanco-167470926.jpg',
    'Buey': 'https://thumbs.dreamstime.com/z/signos-estilizados-de-zodiaco-chino-buey-a%C3%B1o-nuevo-del-decorativo-y-feliz-dise%C3%B1o-tribal-fondo-blanco-ilustraci%C3%B3n-vectorial-191157172.jpg',
    'Tigre': 'https://th.bing.com/th/id/OIP.hoa02LWuGOQddCB-hx9oNQHaHa?rs=1&pid=ImgDetMain',
    'Conejo': 'https://th.bing.com/th/id/OIP.XSDTT5RmhHLZ39XJ35LFPwHaHa?rs=1&pid=ImgDetMain',
    'Dragón': 'https://th.bing.com/th/id/OIP.zsxn3IXlXjUo61TFhsCAHQHaD4?rs=1&pid=ImgDetMain',
    'Serpiente': 'https://th.bing.com/th/id/OIP.4b1BICooihkNM1znTzr5TQHaFG?rs=1&pid=ImgDetMain',
    'Caballo': 'https://media.istockphoto.com/id/932747220/es/vector/caballo-signo-del-zodiaco.jpg?s=1024x1024&w=is&k=20&c=puFaPZ4Mz_iXezFGF_CKKPLkvffcWkyhoSBjdBiqb4k=',
    'Cabra': 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg',
    'Mono': 'https://c8.alamy.com/compes/2e366dm/horoscopo-chino-signo-mono-con-flores-vector-2e366dm.jpg',
    'Gallo': 'https://assets.wemystic.com/wmcom/2018/10/horoscopo-chino-gallo.jpg',
    'Perro': 'https://th.bing.com/th/id/OIP.QkLRLFNl9wR8MwM3a6pI0wHaEK?rs=1&pid=ImgDetMain',
    'Cerdo': 'https://th.bing.com/th/id/OIP.Sv18ISY4_X128LJQxTAfdwHaHa?rs=1&pid=ImgDetMain'
  };

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apaterno: new FormControl('', Validators.required),
      amaterno: new FormControl('', Validators.required),
      dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anio: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      sexo: new FormControl('', Validators.required)
    });
  }

  calcularEdad(): void {
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const anio = this.formulario.get('anio')?.value;
    if (dia && mes && anio) {
      const fechaNacimiento = new Date(anio, mes - 1, dia);
      const edadDifMs = Date.now() - fechaNacimiento.getTime();
      const edadFecha = new Date(edadDifMs);
      this.edad = Math.abs(edadFecha.getUTCFullYear() - 1970);
    }
  }

  obtenerSignoChino(): void {
    const anio = this.formulario.get('anio')?.value;
    if (anio) {
      const signosChinos = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
      this.signoChino = signosChinos[(anio - 4) % 12];
      this.signoImagen = this.signosChinosImagenes[this.signoChino]; // Ruta de la imagen
    }
  }

  imprimir(): void {
    this.calcularEdad();
    this.obtenerSignoChino();
    console.log(`Hola ${this.formulario.get('nombre')?.value} ${this.formulario.get('apaterno')?.value} ${this.formulario.get('amaterno')?.value}`);
    console.log(`Tienes ${this.edad} años`);
    console.log(`Tu signo chino es ${this.signoChino}`);
  }
}


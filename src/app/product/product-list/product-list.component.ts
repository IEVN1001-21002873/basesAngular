import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{
  this.muestraImg=!this.muestraImg
  }
productos:any[]=[
  {
    "ProductoId":1,
    "Modelo":"Lambo",
    "Descripcion":"2 Puertas",
    "Year":"febrero 2 2020",
    "Precio":1200000,
    "Color":"Azul",
    "ImagenUrl":"https://hdqwalls.com/wallpapers/dodge-challenger-srt-hellcat-widebody-2018-4k-3b.jpg"
},
{
"ProductoId":2,
    "Modelo":"Sentra",
    "Descripcion":"2 Puertas",
    "Year":"febrero 2 2020",
    "Precio":20000,
    "Color":"Azul",
    "ImagenUrl":"https://th.bing.com/th/id/R.c37fae810c8fb213b1ce1c8d2917d8fa?rik=lETrN6HNqflQtQ&pid=ImgRaw&r=0"
  },
  {
    "ProductoId":3,
    "Modelo":"A4",
    "Descripcion":"2 Puertas",
    "Year":"febrero 2 2020",
    "Precio":20000,
    "Color":"Azul",
    "ImagenUrl":"https://th.bing.com/th/id/R.aecb55fc4993ee4332a5ac147c3a1aa8?rik=h%2bTogZhlYuUuxQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f97%2fAudi_A1.jpg&ehk=TjzJus6E3hT5EXCpzRdjWn5wx8ikVyffAZvb4VmHRlc%3d&risl=&pid=ImgRaw&r=0"
  }
]
}

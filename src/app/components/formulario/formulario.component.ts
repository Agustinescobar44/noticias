import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categorias = [
    {value: 'general' , nombre: 'General'},
    {value: 'business' , nombre: 'Negocios'},
    {value: 'entertainment' , nombre: 'Entretenimiento'},
    {value: 'health' , nombre: 'Salud'},
    {value: 'science' , nombre: 'Ciencia'},
    {value: 'sports' , nombre: 'Deportes'},
    {value: 'technology' , nombre: 'Tecnologia'},
  ]

  paises = [
    { value: 'ar' , nombre: 'Argentina'},
    { value: 'br' , nombre: 'Brasil'},
    { value: 'fr' , nombre: 'Francia'},
    { value: 'hu' , nombre: 'Hungria'},
    { value: 'mx' , nombre: 'Mexico'},
    { value: 'gb' , nombre: 'Reino Unido'},
  ]

  categoriaSeleccionada= "general"
  paisSeleccionado = "ar"

  @Output() parameterOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticias(){
    const PARAMETERS = {
      country: this.paisSeleccionado,
      category: this.categoriaSeleccionada
    }
    this.parameterOutput.emit(PARAMETERS)
  }

}

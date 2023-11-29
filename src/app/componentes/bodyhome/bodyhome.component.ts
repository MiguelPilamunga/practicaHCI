import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosModel} from "../../Domain/cursos.model";
import {MateriaModel} from "../../Domain/materia.model";
import {ItemCursoComponent} from "./item-curso/item-curso.component";

@Component({
  selector: 'app-bodyhome',
  standalone: true,
  imports: [CommonModule,ItemCursoComponent],
  templateUrl: './bodyhome.component.html',
  styleUrl: './bodyhome.component.css'
})
export class BodyhomeComponent {

  cursos =signal<CursosModel[]>([]);
  carrito = signal<CursosModel[]>([]);
  banner = signal(false);
  constructor() {
    this.cursos.set([
      {
        id: 1,
        nombre: 'Fundamentos de Programación',
        descripcion: 'Introducción a la programación para principiantes',
        precio: 49.99,
        imagen: 'https://picsum.photos/id/101/600/400',
        instructor: 'Juan Pérez',
        numeroEstudiantes: 500,
        calificacion: 4.5,
        fechaLanzamiento: '2023-01-15',
        maxCupos: 1000,
      },
      {
        id: 2,
        nombre: 'Desarrollo Web Avanzado',
        descripcion: 'Aprende tecnologías web modernas y avanzadas',
        precio: 79.99,
        imagen: 'https://picsum.photos/id/202/600/400',
        instructor: 'María Rodríguez',
        numeroEstudiantes: 300,
        calificacion: 4.8,
        fechaLanzamiento: '2023-02-28',
        maxCupos: 500,
      },
      {id: 3,
        nombre: 'Fundamentos de Machine Learning ',
        descripcion: 'Introducción a los conceptos fundamentales de Machine Learning',
        precio: 99.99,
        imagen: 'https://picsum.photos/id/101/600/400',
        instructor: 'Ana Gómez',
        numeroEstudiantes: 200,
        calificacion: 4.7,
        fechaLanzamiento: '2023-03-10',
        maxCupos: 300,
      },
      {
        id: 4,
        nombre: 'Diseño de Interfaz de Usuario ',
        descripcion: 'Aprende a diseñar interfaces de usuario atractivas y efectivas',
        precio: 69.99,
        imagen: 'https://picsum.photos/id/404/600/400',
        instructor: 'Carlos Navarro',
        numeroEstudiantes: 400,
        calificacion: 4.6,
        fechaLanzamiento: '2023-04-05',
        maxCupos: 600,
      },
      {
        id: 5,
        nombre: 'Desarrollo de Aplicaciones Móviles',
        descripcion: 'Crea aplicaciones móviles para iOS y Android',
        precio: 89.99,
        imagen: 'https://picsum.photos/id/505/600/400',
        instructor: 'Luisa Torres',
        numeroEstudiantes: 250,
        calificacion: 4.9,
        fechaLanzamiento: '2023-05-20',
        maxCupos: 400,
      },
      {
        id: 6,
        nombre: 'Ciberseguridad Avanzada',
        descripcion: 'Protege sistemas y datos contra amenazas cibernéticas',
        precio: 129.99,
        imagen: 'https://picsum.photos/id/606/600/400',
        instructor: 'Javier Martínez',
        numeroEstudiantes: 150,
        calificacion: 4.8,
        fechaLanzamiento: '2023-06-15',
        maxCupos: 200,
      },
      {
        id: 7,
        nombre: 'Marketing Digital',
        descripcion: 'Domina las estrategias de marketing en la era digital',
        precio: 79.99,
        imagen: 'https://picsum.photos/id/13/600/400',
        instructor: 'Elena Ramírez',
        numeroEstudiantes: 300,
        calificacion: 4.7,
        fechaLanzamiento: '2023-07-01',
        maxCupos: 500,
      },
      {
        id: 8,
        nombre: 'Desarrollo de juegos',
        descripcion: 'Crea tus propios videojuegos con la plataforma Unity',
        precio: 109.99,
        imagen: 'https://picsum.photos/id/808/600/400',
        instructor: 'Martín González',
        numeroEstudiantes: 180,
        calificacion: 4.6,
        fechaLanzamiento: '2023-08-10',
        maxCupos: 250,
      },
    ]);
  }

  addToRoute(event: CursosModel) {
    this.carrito.update(prevState => [...prevState, event]);
  }


  showBanner() {
    this.banner.update(prevState => !prevState);
  }
}

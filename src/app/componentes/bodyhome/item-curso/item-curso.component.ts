import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosModel} from "../../../Domain/cursos.model";

@Component({
  selector: 'app-item-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-curso.component.html',
  styleUrl: './item-curso.component.css'
})
export class ItemCursoComponent {
  @Input() curso!: CursosModel;

  @Output()  eventAddToRoute = new EventEmitter();
  addToRoute(){
    this.eventAddToRoute.emit(this.curso);
  }
}

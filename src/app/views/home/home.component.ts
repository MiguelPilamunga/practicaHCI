import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../../componentes/navbar/navbar.component";
import {BodyhomeComponent} from "../../componentes/bodyhome/bodyhome.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent, BodyhomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

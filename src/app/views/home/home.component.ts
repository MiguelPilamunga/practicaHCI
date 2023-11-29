import {Component, signal} from '@angular/core';
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
  title= signal(('Estamos preparando los mejores cursos para ti '));
  progressValue = signal(45);
  progressRef : number | undefined;
  ngOnInit(): void {
    this.progressRef = setInterval(() => {
      this.progressValue.update(prevState => prevState + 2 );
    } , 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.progressRef);
  }

}

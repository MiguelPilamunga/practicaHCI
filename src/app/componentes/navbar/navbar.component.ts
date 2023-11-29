import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleLanguage = signal(true);
  language = signal('Español');

  showLanguage(){
    this.toggleLanguage.update(statePrev => !statePrev  );
  }

  changeLanguage(){
    this.language.update(statePrev => statePrev === 'Español' ? 'English' : 'Español' );
    this.showLanguage();
  }


}

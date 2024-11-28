import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';
import { QuartoComponent } from './quarto/quarto.component';


@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet,SecondoComponent,TerzoComponent,QuartoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name: string = 'App';  
}

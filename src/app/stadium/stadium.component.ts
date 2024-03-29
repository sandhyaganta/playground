import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stadium',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './stadium.component.html',
  styleUrl: './stadium.component.css'
})
export class StadiumComponent {

}

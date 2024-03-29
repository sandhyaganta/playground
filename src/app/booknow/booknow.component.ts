import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booknow',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './booknow.component.html',
  styleUrl: './booknow.component.css'
})
export class BooknowComponent {

}

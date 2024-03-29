import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booked',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.css'
})
export class BookedComponent {

}

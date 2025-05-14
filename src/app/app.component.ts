import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublisherComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraryapp-frontend';
}

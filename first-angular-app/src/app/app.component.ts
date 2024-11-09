import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// This is the decorater angular use to add meta data
// for the component, which acts as the configuration
// for this component
@Component({
  // Tell angular which element this component should replace
  selector: 'app-root',
  // Standalone means this is not module based component
  // simpler to use, set this to no to use module based
  // component to be compatible with contentional angular
  // component
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
}

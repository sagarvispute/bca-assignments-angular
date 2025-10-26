import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { UncontrolledContactForm } from '../components/uncontrolled-contact-form/uncontrolled-contact-form';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContactFormComponent,
    UncontrolledContactForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bca-assignments-angular');
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uncontrolled-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './uncontrolled-contact-form.html',
  styleUrl: './uncontrolled-contact-form.css',
})
export class UncontrolledContactForm {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.contact);
      this.contact = { name: '', email: '', message: '' };
      form.resetForm();
    }
  }
}

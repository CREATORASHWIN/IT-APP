import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero {
  showForm = false;

  name = '';
  phone = '';
  message = '';

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  submitForm(): void {
    const text =
      `Hello TECHCO,%0A` +
      `Name: ${this.name}%0A` +
      `Phone: ${this.phone}%0A` +
      `Requirement: ${this.message}`;

    // WhatsApp number WITHOUT "+"
    const whatsappNumber = '971562245863';

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      '_blank'
    );

    this.closeForm();
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  name = '';
  phone = '';
  message = '';

  // ✅ Replace with your WhatsApp number (no + sign)
  whatsappNumber = '971562245863';

  submitForm() {
    const text =
      `Hello TECHCO,%0A` +
      `Name: ${this.name}%0A` +
      `Phone: ${this.phone}%0A` +
      `Message: ${this.message}`;

    window.open(`https://wa.me/${this.whatsappNumber}?text=${text}`, '_blank');

    // Optional: clear fields
    this.name = '';
    this.phone = '';
    this.message = '';
  }
}

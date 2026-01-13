import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Features } from './components/features/features';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Hero, Services, Features, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}

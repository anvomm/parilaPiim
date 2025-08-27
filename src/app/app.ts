import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './app.scss'
})
export class App {

}

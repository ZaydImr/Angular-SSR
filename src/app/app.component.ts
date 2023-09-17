import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ssr-startup';
  tools = [
    { title : 'Angular 16', img : 'https://img.icons8.com/?size=72&id=l9a5tcSnBwcf&format=png'},
    { title : '`SSR` Server side rendering', img : 'https://img.icons8.com/?size=72&id=ht5OgXaoBIO2&format=png'},
    { title : '`PWA` Progress web application', img : 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png'},
    { title : 'SCSS + TailwindCSS', img : 'https://img.icons8.com/?size=72&id=CIAZz2CYc6Kc&format=png'},
    { title : 'Vercel deployment', img : 'https://www.svgrepo.com/show/327408/logo-vercel.svg'}
  ];

  public getWidth(title: string): string{
    if(title.includes('Angular') || title.includes('Vercel')){
      return '28';
    }
    return '34';
  }
}

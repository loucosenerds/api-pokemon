import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importe o AppModule aqui

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

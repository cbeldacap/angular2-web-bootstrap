import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    // path: '',
    // redirectTo: '/Login',
    // pathMatch: 'full'
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

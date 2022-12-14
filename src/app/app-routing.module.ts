import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pre-inscription', loadChildren: () => import('./page/pre-inscription/pre-inscription.module').then(m => m.PreInscriptionModule) },

  {
    path: '**',
    redirectTo: 'pre-inscription',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

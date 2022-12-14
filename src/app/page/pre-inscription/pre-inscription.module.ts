import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreInscriptionComponent } from './pre-inscription.component';
import { PreInscriptionPageComponent } from './pre-inscription-page/pre-inscription-page.component';
const routes: Routes = [
  {
    path: '',
    component: PreInscriptionComponent,
    children: [
      {
        path: '',
        redirectTo: 'preInscriptionPages',
        pathMatch: 'full'
      },
      {
        path: 'preInscriptionPages',
        component: PreInscriptionPageComponent
      },

      { path: '**', redirectTo: 'preInscriptionPages', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  declarations: [
    PreInscriptionPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PreInscriptionModule { }

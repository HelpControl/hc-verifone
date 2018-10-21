import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TypesOfBusinessesPage } from './types-of-businesses.page';

const routes: Routes = [
  {
    path: '',
    component: TypesOfBusinessesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TypesOfBusinessesPage]
})
export class TypesOfBusinessesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceAndSupportPage } from './service-and-support.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceAndSupportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceAndSupportPage]
})
export class ServiceAndSupportPageModule {}

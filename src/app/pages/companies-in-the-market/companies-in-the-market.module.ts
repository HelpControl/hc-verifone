import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompaniesInTheMarketPage } from './companies-in-the-market.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesInTheMarketPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompaniesInTheMarketPage]
})
export class CompaniesInTheMarketPageModule {}

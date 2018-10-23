import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },

  { path: 'יתרונות-וריפון', redirectTo: 'about' },
  {
    path: 'CompaniesInTheMarket',
    loadChildren:
      './pages/companies-in-the-market/companies-in-the-market.module#CompaniesInTheMarketPageModule'
  },
  {
    path: 'Products',
    loadChildren: './pages/products/products.module#ProductsPageModule'
  },
  {
    path: 'QuoteList',
    loadChildren: './pages/quote-list/quote-list.module#QuoteListPageModule'
  },
  {
    path: 'TypesOfBusinesses',
    loadChildren:
      './pages/types-of-businesses/types-of-businesses.module#TypesOfBusinessesPageModule'
  },
  {
    path: 'ServiceAndSupport',
    loadChildren:
      './pages/service-and-support/service-and-support.module#ServiceAndSupportPageModule'
  },
  {
    path: 'auth-verifone',
    loadChildren:
      './pages/auth-verifone/auth-verifone.module#AuthVerifonePageModule'
  },
  // О VeriFone
  {
    path: 'CompaniesInTheMarket',
    loadChildren:
      './pages/companies-in-the-market/companies-in-the-market.module#CompaniesInTheMarketPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

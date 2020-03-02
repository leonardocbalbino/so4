import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-recarga',
    loadChildren: () => import('./view-recarga/view-recarga.module').then( m => m.ViewRecargaPageModule)
  },
  {
    path: 'view-plano',
    loadChildren: () => import('./view-plano/view-plano.module').then( m => m.ViewPlanoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then( m => m.BoletoPageModule)
  },
  {
    path: 'view-troca-i-m',
    loadChildren: () => import('./view-troca-i-m/view-troca-i-m.module').then( m => m.ViewTrocaIMPageModule)
  },
  {
    path: 'view-termo',
    loadChildren: () => import('./view-termo/view-termo.module').then( m => m.ViewTermoPageModule)
  },
  {
    path: 'view-chip',
    loadChildren: () => import('./view-chip/view-chip.module').then( m => m.ViewChipPageModule)
  },
  {
    path: 'view-portabilidade',
    loadChildren: () => import('./view-portabilidade/view-portabilidade.module').then( m => m.ViewPortabilidadePageModule)
  },
  {
    path: 'view-dados',
    loadChildren: () => import('./view-dados/view-dados.module').then( m => m.ViewDadosPageModule)
  },
  {
    path: 'view-debito',
    loadChildren: () => import('./view-debito/view-debito.module').then( m => m.ViewDebitoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

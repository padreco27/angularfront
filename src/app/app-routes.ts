import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { ContadoComponent } from './institucional/contado/contado.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContadoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component:ListaProdutosComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutosComponent }
];

import { Routes } from '@angular/router';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { CategoryComponent } from './pages/category/category.component';
import { PublisherEditComponent } from './pages/publisher/publisher-edit/publisher-edit.component';
import { BookComponent } from './pages/book/book.component';
import { BookEditComponent } from './pages/book/book-edit/book-edit.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { MascotaEditComponent } from './pages/mascota/mascota-edit/mascota-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [


   {path: 'login', component: LoginComponent},
   {path: '', redirectTo: 'login', pathMatch: 'full'},
   {
    path: 'pages', component: LayoutComponent,
    loadChildren: () => import('./pages/pages.roules')
    .then((x) => x.pagesRoutes)
   }
];

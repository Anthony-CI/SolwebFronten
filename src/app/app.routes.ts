import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { PublisherComponent } from './pages/publisher/publisher.component';

export const routes: Routes = [
    {path: 'pages/category',component: CategoryComponent},
    {path: 'pages/publisher', component: PublisherComponent}
];

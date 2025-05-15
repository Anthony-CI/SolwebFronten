import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { PublisherEditComponent } from './pages/publisher/publisher-edit/publisher-edit.component';

export const routes: Routes = [
    {path: 'pages/category',component: CategoryComponent},
    {path: 'pages/publisher', component: PublisherComponent,
        children: [
                //pages/publisher/2
            {path: 'new', component: PublisherEditComponent},
                //pages/publisher/new
            {path: 'edit/:id', component: PublisherEditComponent},
        ]
    }


];

import { Route, Routes } from "@angular/router";
import { PublisherComponent } from "./publisher/publisher.component";
import { PublisherEditComponent } from "./publisher/publisher-edit/publisher-edit.component";
import { CategoryComponent } from "./category/category.component";
import { BookComponent } from "./book/book.component";
import { BookEditComponent } from "./book/book-edit/book-edit.component";
import { MascotaComponent } from "./mascota/mascota.component";
import { MascotaEditComponent } from "./mascota/mascota-edit/mascota-edit.component";
import { AuthorComponent } from "./author/author.component";

export const pagesRoutes: Routes=[
    {
        path: 'publisher',
        component: PublisherComponent,
        children: [
          { path: 'new', component: PublisherEditComponent }, // pages/publisher/new
          { path: 'edit/:id', component: PublisherEditComponent }, // pages/publisher/edit/1
        ],
      },
      { path: 'category', component: CategoryComponent },
      { path: 'book', 
        component: BookComponent,
          children: [
          { path: 'new', component: BookEditComponent }, // pages/boot/new
          { path: 'edit/:id', component: BookEditComponent }, // pages/book/edit/1
        ],
       },
    
       { path: 'mascota', 
        component: MascotaComponent,
          children: [
          { path: 'new', component: MascotaEditComponent }, // pages/mascota/new
          { path: 'edit/:id', component: MascotaEditComponent}, // pages/mascota/edit/1
        ],
       },

       {
        path: 'author', component: AuthorComponent
       },
];
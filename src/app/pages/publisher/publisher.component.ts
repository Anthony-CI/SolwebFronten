import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../model/publisher';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-publisher',
  imports: [MatTableModule, MatFormField, MatInput,MatButton,MatIconModule, MatPaginatorModule,
    MatSortModule,RouterLink,RouterOutlet
  ],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.css'
})
export class PublisherComponent {
  //publishers: Publisher[];
  displayedColumns: string[] = ['idPublisher', 'name', 'address'];
  dataSource: MatTableDataSource<Publisher>;
  //constructor(private publisherService: PublisherService){}
 
  //arreglo personalizado
  columDefinitions = [
    {def: 'idPublisher', label: 'idPublisher', hide: true},
    {def: 'name', label: 'name', hide: false},
    {def: 'address', label: 'address', hide: false},
    {def: 'actions', label: 'actions', hide: false},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  publisherService = inject(PublisherService);

  ngOnInit():void{
    // this.publisherService.findAll().subscribe(data => console.log(data));
    //this.publisherService.findAll().subscribe(data => this.publishers = data);
    this.publisherService.findAll().subscribe(data => {
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }); 
  }

  //metodo para habilitar la busqueda
  applyFilter(e : any){
    this.dataSource.filter = e.target.value.trim();
  }

  //metodo mostrar columnas que no tienen el atributo hide=true
  getDisplayColums(){
    return this.columDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

}

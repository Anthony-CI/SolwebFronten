import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Author } from '../../model/author';
import { AuthorService } from '../../services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthorDialogComponent } from './author-dialog/author-dialog.component';

@Component({
  selector: 'app-author',
  imports: [
    MatTableModule,
    MatIconModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  dataSource: MatTableDataSource<Author>;

  columnsDefinitions = [
    { def: 'idAuthor', label: 'idAuthor', hide: true },
    { def: 'lastName', label: 'lastName', hide: false },
    { def: 'firstName', label: 'firstName', hide: false },
    { def: 'birthdate', label: 'birthdate', hide: false },
    { def: 'placeBirthdate', label: 'placeBirthdate', hide: false },
    { def: 'actions', label: 'actions', hide: false },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authorService: AuthorService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,//para abrir el modal
  ){}

  ngOnInit(): void {
    // this.publisherService.findAll().subscribe(data => console.log(data));
    // this.publisherService.findAll().subscribe(data => this.publishers = data);
    this.authorService.findAll().subscribe((data) => {
      this.createTable(data);
    });

    this.authorService.getAuthorChange().subscribe(data => this.createTable(data));
  
   this.authorService.getMessageChange().subscribe(
    data => this._snackBar.open(data,'INFO', {duration: 2000, horizontalPosition: 'right', verticalPosition:'bottom'})
   );
  }

  createTable(data: Author[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getDisplayedColumns() {
    return this.columnsDefinitions.filter((cd) => !cd.hide).map((cd) => cd.def);
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  delete(id: number){
    this.authorService.delete(id)
      .pipe(switchMap( () => this.authorService.findAll()))
      .subscribe( data => {
        this.authorService.setAuthorChange(data);
        this.authorService.setMessageChange('DELETED!');
      });
  }

  //metodo para abrir el modal
  openDialog(author?:Author){
    this._dialog.open(AuthorDialogComponent, {
      width : '750px',
      data:author
    });
  }

}

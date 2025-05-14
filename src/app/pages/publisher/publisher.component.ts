import { Component, inject } from '@angular/core';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../model/publisher';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-publisher',
  imports: [MatTableModule, MatFormField, MatInput],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.css'
})
export class PublisherComponent {
  //publishers: Publisher[];
  displayedColumns: string[] = ['idPublisher', 'name', 'address'];
  dataSource: MatTableDataSource<Publisher>;
  //constructor(private publisherService: PublisherService){}
  publisherService = inject(PublisherService);

  ngOnInit():void{
    // this.publisherService.findAll().subscribe(data => console.log(data));
    //this.publisherService.findAll().subscribe(data => this.publishers = data);
    this.publisherService.findAll().subscribe(data => {
      this.dataSource= new MatTableDataSource(data);
    }); 
  }

  applyFilter(e : any){
    this.dataSource.filter = e.target.value.trim();
  }

}

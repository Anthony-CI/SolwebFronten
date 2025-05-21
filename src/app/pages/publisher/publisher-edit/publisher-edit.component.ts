import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Publisher } from '../../../model/publisher';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publisher-edit',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './publisher-edit.component.html',
  styleUrl: './publisher-edit.component.css'
})
export class PublisherEditComponent {
  form : FormGroup;
  id :number;
  isEdit: boolean;

  constructor(
    private publisherService: PublisherService,
    private route : ActivatedRoute //para saber la ruta activa
  ){}

  ngOnInit(){
    this.form = new FormGroup({
      idPublisher : new FormControl(),
      address : new FormControl(),
      name : new FormControl()
    });

    this.route.params.subscribe(data =>{
      this.id= data['id'];
      this.isEdit = data['id'] != null;
      //cargar formulario con los datos recuperados
      this.initForm();
    });
  }

  //para cargar un formulario

  initForm(){
    if(this.isEdit){
      this.publisherService.finById(this.id).subscribe((data) =>{
        this.form = new FormGroup({
          idPublisher:new FormControl(data.idPublisher),
          name : new FormControl(data.name),
          address: new FormControl(data.address)
        });
      });
    }
  }


  //Sepuede cambiar el nombre a save, este metodo guardara en BD
  operate(){
    //console.log("operate!");

    const publisher : Publisher = new Publisher();
    publisher.idPublisher = this.form.value['idPublisher'];
    //dos formas mas de guardar el id
    //const x = this.form.controls['idPublisher'].value;
    //const y = this.form.get('idPublisher').value;
    publisher.name=this.form.value['name'];
    publisher.address=this.form.value['address'];
    if(this.isEdit){
      this.publisherService.update(this.id,publisher).subscribe();
    }else {
      this.publisherService.save(publisher).subscribe();
    }
    //save
    this.publisherService.save(publisher).subscribe()
  }
}

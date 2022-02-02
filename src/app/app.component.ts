import { Component } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-backend-node';
  showAddForm = false;
  notes: any = [];
  model:any={};
  constructor(private notesService:NotesService) { }

  ngOnInit(){
    this.getMenusAll();
  }


  getMenusAll(){
    let errorMessage = "Error Loading !!!, Please contact admin.";
    this.notesService.getNotesAll().subscribe(
      (response: any[]) => {
        this.notes = response;
    },
    error =>{
      this.notes=[];
      
    },
    () =>{

    }) ;
  }

  editNote(note){

  }

  deleteNote(note){
    
  }

  addNote(){
    this.showAddForm = true;
  }

  submitAddNote(){
    this.showAddForm = false;
    console.log(this.model);
    // this.model={};
    // this.model={"title":"3","content":"api 3"};
    let errorMessage = "Error Loading !!!, Please contact admin.";
    this.notesService.addNote(this.model).subscribe(
      (response: any[]) => {
        
    },
    error =>{
      this.notes=[];
      this.model={};
    },
    () =>{
      this.model={};
      this.getMenusAll();
    }) ;
  }

}

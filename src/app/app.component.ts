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
  showNoteList = true;
  showEditForm = false;
  notes: any = [];
  model:any={};
  constructor(private notesService:NotesService) { }

  ngOnInit(){
    this.getAllNotes();
  }


  getAllNotes(){
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
    this.model = note;
    this.showEditForm = true;
    this.showNoteList = false;
  }

  deleteNote(note){
    let errorMessage = "Error Loading !!!, Please contact admin.";
    this.notesService.deleteNote(note._id).subscribe(
      (response: any[]) => {
        
    },
    error =>{
      this.notes=[];
      this.model={};
    },
    () =>{
      this.model={};
      this.getAllNotes();
    }) ;
  }

  addNote(){
    this.showAddForm = true;
    this.showNoteList = false;
  }

  submitAddNote(){
    this.showAddForm = false;
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
      this.getAllNotes();
      this.showNoteList = true;
    }) ;
  }

  cancelAddNote(){
    this.showAddForm = false;
    this.showNoteList = true;
  }

  submitEditNote(){
    this.showEditForm = false;
    let errorMessage = "Error Loading !!!, Please contact admin.";
    this.notesService.editNote(this.model).subscribe(
      (response: any[]) => {
        
    },
    error =>{
      this.notes=[];
      this.model={};
    },
    () =>{
      this.model={};
      this.getAllNotes();
      this.showNoteList = true;
    }) ;
  }

  cancelEditNote(){
    this.showNoteList = true;
    this.showEditForm = false;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  params: any;
  private API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getNotesAll():Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/notes');
  }

  editNote(note:any):Observable<any[]> {
    return this.http.put<any[]>(this.API_URL + '/notes/'+note._id,note);
  }

  deleteNote(noteid):Observable<any[]> {
    return this.http.delete<any[]>(this.API_URL + '/notes/'+noteid);
  }


  addNote(note:any):Observable<any>{
    return this.http.post<any>(this.API_URL + '/notes',note,{
      headers : {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
  });
  }
}

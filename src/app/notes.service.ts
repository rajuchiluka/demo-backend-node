import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getNotesAll():Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/notes');
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

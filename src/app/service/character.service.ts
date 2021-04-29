import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Character} from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiURL = environment.apiURL;
  characterSource = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiURL}/character/list`);
  }

  public get(characterID: number): Observable<Character>{
    return this.http.get<Character>(`${this.apiURL}/character/${characterID}`);
  }
}

import {Injectable} from '@angular/core';
import {Episode} from '../models/Episode';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private apiURL = environment.apiURL;
  private episodeSource = new BehaviorSubject(null);
  currentEpisode = this.episodeSource.asObservable();

  constructor(private http: HttpClient) {
  }

  public getEpisodeDetails(episodeID: number): void {
    this.get(episodeID).subscribe(
      (response: Episode) => this.episodeSource.next(response),
      (error: HttpErrorResponse) => alert(error.statusText)
    );
  }

  public list(): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.apiURL}/episodes/list`);
  }

  public get(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiURL}/episodes/${id}`);
  }

  public create(episode: Episode): Observable<Episode> {
    return this.http.post<Episode>(`${this.apiURL}/episodes/new`, episode);
  }

  public update(id: number, episode: Episode): Observable<Episode> {
    return this.http.put<Episode>(`${this.apiURL}/episodes/${id}`, episode);
  }

  public delete(id: number): Observable<Episode> {
    return this.http.delete<Episode>(`${this.apiURL}/episodes/${id}`);
  }
}

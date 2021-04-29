import { Component, OnInit } from '@angular/core';
import {Episode} from '../../models/Episode';
import {EpisodeService} from '../../service/episode.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  data: {
    season: number,
    episode: Episode[]
  }[];

  activeEpisode: Episode;

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    this.getEpisodes();
    this.activeEpisode = null;
  }

  public onEpisodeItemClick(episode: Episode): void{
    this.activeEpisode = episode;
    this.episodeService.getEpisodeDetails(episode.id);
  }

  public splitEpisodesBySeasons(episodes: Episode[]): void {
    // @ts-ignore
    const result: {
      season: number,
      episode: Episode[]
    }[] = [];

    const seasons = new Set<number>();
    episodes.forEach(e => seasons.add(e.season));
    seasons.forEach(s => result.push({season: s, episode: episodes.filter(e => e.season === s)}));
    this.data = result;
  }

  public getEpisodes(): void {
    this.episodeService.list().subscribe(
      (response: Episode[]) => {
        this.splitEpisodesBySeasons(response);
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

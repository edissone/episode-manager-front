import {Component, OnDestroy, OnInit} from '@angular/core';
import {Episode} from '../../models/Episode';
import {Subscription} from 'rxjs';
import {EpisodeService} from '../../service/episode.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEpisodeModalComponent} from '../add-episode-modal/add-episode-modal.component';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit, OnDestroy {

  episode: Episode;
  subscription: Subscription;

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    this.subscription = this.episodeService.currentEpisode.subscribe(episode => this.episode = episode);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

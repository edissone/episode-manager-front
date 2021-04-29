import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EpisodeListComponent } from './component/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './component/episode-detail/episode-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddEpisodeModalComponent } from './component/add-episode-modal/add-episode-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeDetailComponent,
    AddEpisodeModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

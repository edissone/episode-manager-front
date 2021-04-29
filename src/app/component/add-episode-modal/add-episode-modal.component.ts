import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Character} from '../../models/Character';
import {CharacterService} from '../../service/character.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EpisodeService} from '../../service/episode.service';
import {Episode} from '../../models/Episode';

@Component({
  selector: 'app-add-episode-modal',
  templateUrl: './add-episode-modal.component.html',
  styleUrls: ['./add-episode-modal.component.css']
})
export class AddEpisodeModalComponent implements OnInit {
  // @ts-ignore
  addForm: FormGroup;
  characters: Character[];
  selected: Character[];

  constructor(private formBuilder: FormBuilder, private characterService: CharacterService,
              private activeModal: NgbActiveModal, private episodeService: EpisodeService) {
  }

  onAddEpisode(): void {
    console.log(this.addForm.value);
    this.episodeService.create(this.addForm.value).subscribe(
      (response: Episode) =>
        console.log(response),
      (error: HttpErrorResponse) =>
        console.error(error.message)
    );
    this.addForm.reset();
    this.closeModal();
  }

  // tslint:disable-next-line:typedef
  closeModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        season: ['', [Validators.required, Validators.min(0)]],
        number: ['', [Validators.required]],
        releasedAt: ['', ],
        characters: ['', ]
      }
    );
    this.characterService.list().subscribe(
      (response: Character[]) => {
        this.characters = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

}

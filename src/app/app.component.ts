import {Component} from '@angular/core';
import {AddEpisodeModalComponent} from './component/add-episode-modal/add-episode-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private modalService: NgbModal) {
  }

  onOpenModal(type: string): void {
    if (type === 'add') {
      this.modalService.open(AddEpisodeModalComponent);
    }
  }
}

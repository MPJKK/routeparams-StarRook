import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../services/media.service';
import {User} from '../models/user';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  file: any;
  isImage = false;
  isAudio = false;
  isVideo = false;
  user: any;

  constructor(private route: ActivatedRoute, public mediaService: MediaService) { }

  getUsername(id) {
    console.log('here');
    this.mediaService.getUsername(localStorage.getItem('token'), id).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params.param);

      this.mediaService.getOneFile(params.param).subscribe(data => {
        console.log(data);
        switch (data.media_type) {
          case 'image':
            console.log('File type is image');
            this.isImage = true;
            this.file = data;
            this.getUsername(data.user_id);
            break;
          case 'audio':
            console.log('File type is audio');
            this.isAudio = true;
            this.file = data;
            console.log(data);
            this.getUsername(data.user_id);
            break;
          case 'video':
            console.log('File type is video');
            this.isVideo = true;
            this.file = data;
            this.getUsername(data.user_id);
            break;
        }
      });
    });
  }
}

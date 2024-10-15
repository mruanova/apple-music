import { Component, OnInit } from '@angular/core';
import { MUSICKIT_APP_BUILD, MUSICKIT_APP_NAME } from './constants';
declare var MusicKit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';
  token: string = '';
  message: string = '';
  constructor() {
    MusicKit.configure({
      developerToken: this.token,
      app: {
        name: MUSICKIT_APP_NAME,
        build: MUSICKIT_APP_BUILD,
      }
    });
  }
  ngOnInit() {
    this.title = 'Apple Music';
    this.token = 'APPLE-DEVELOPER-TOKEN';
  }
  onClick(event: MouseEvent) {
    console.log(event);
    const music = MusicKit.getInstance();
    if (music) {
      music.authorize().then((response: any) => {
        console.log(response);
        this.message = "Authorized";
      }).catch((err: { message: string; }) => {
        console.error(err);
        this.message = err.message;
      });
    } else {
      this.message = "Invalid token";
    }
  };
}

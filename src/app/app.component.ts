import { Component } from '@angular/core';
import { MUSICKIT_APP_BUILD, MUSICKIT_APP_NAME } from './constants';
declare var MusicKit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apple Music';
  token = 'APPLE-DEVELOPER-TOKEN';
  constructor() {
    MusicKit.configure({
      developerToken: this.token,
      app: {
        name: MUSICKIT_APP_NAME,
        build: MUSICKIT_APP_BUILD,
      }
    });
  }
  onClick(event: MouseEvent) {
    const music = MusicKit.getInstance();
    if (music) {
      music.authorize().then(function () {
        console.log("Authorized", event);
      });
    }
  };
}

import { Component } from '@angular/core';
import { DEVELOPER_TOKEN, MUSICKIT_APP_BUILD, MUSICKIT_APP_NAME } from './constants';
declare var MusicKit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apple Music';
  constructor() {
    MusicKit.configure({
      developerToken: DEVELOPER_TOKEN,
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

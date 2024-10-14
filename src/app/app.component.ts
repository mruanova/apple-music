import { Component } from '@angular/core';
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
      developerToken: 'token', // TODO: put my own token in the real code
      app: {
        name: 'Hear',
        build: '1978.4.1'
      }
    });
  }
  onClick(event: MouseEvent) {
    const music = MusicKit.getInstance();
    music.authorize().then(function () {
      console.log("Authorized");
    });
  };
}

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
    document.addEventListener('musickitloaded', function () {
      // here configuration of MusicKit Instance and all the playback
      console.log('musickitloaded: here configuration of MusicKit Instance and all the playback');
    });
  }
  async onClick(event: MouseEvent) {
    const music = MusicKit.configure({
      developerToken: 'token', // TODO: put my own token in the real code
      app: {
        name: 'Hear',
        build: '1978.4.1'
      }
    });
    await music.authorize().then(function () {
      console.log("Authorized");
      music.setQueue({
        song: '1292397498'
      }).then(function () {
        music.play();
      })
    });
    // window.music = music;
    const musicKit = MusicKit.getInstance();
    if (musicKit) {
      // Music previews can be played without authorization:
      await musicKit.play();
      // To play the full length of a song, check authorization before calling play():
      await musicKit.authorize();
      await musicKit.play();
      // You should check authorization before accessing user's iCloud Music Library:
      await musicKit.authorize();
      //const { data: result } = await musicKit.api.music('v1/me/library/albums');
      const result = await musicKit.api.search(
        `/v1/catalog/us/search`,
        { term: 'SEARCH_TERM', types: 'albums' }
      );
      // User's iCloud Music Library Albums
      console.log('result', result);
    } else {
      console.log('musicKit is undefinded');
    }
  };
}

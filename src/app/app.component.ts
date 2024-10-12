import { Component } from '@angular/core';
declare var MusicKit: any; // Or declare specific function names if known
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apple Music';
  async onClick(event: MouseEvent) {
    const music = MusicKit.getInstance();
    if (music) {
      // Music previews can be played without authorization:
      await music.play();
      // To play the full length of a song, check authorization before calling play():
      await music.authorize();
      await music.play();
      // You should check authorization before accessing user's iCloud Music Library:
      await music.authorize();
      //const { data: result } = await music.api.music('v1/me/library/albums');
      const result = await music.api.search(
        `/v1/catalog/us/search`,
        { term: 'SEARCH_TERM', types: 'albums' }
      );
      // User's iCloud Music Library Albums
      console.log('result', result);
    } else {
      console.log(event);
    }
  };
}

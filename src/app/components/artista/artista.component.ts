import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artistId: string;

  constructor( private route: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.route.params.subscribe( data => {
      this.artistId = data['id'];
    });

    this.getArtist();

  }

  ngOnInit(): void {
  }

  getArtist() {
    this.spotify.getArtist(this.artistId).subscribe( (data: any) => {
      console.log(data);
    });
  }

}

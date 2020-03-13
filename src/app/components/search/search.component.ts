import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService ) {
   }

  ngOnInit(): void {
  }


  buscar(artista: string) {
    this.loading = true;
    this.spotify.searchArtist(artista).subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

}

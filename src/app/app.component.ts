import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '../model/episode';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { EpisodesFilterComponent } from './episodes-filter/episodes-filter.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EpisodeComponent, EpisodesFilterComponent, EpisodesListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  data: Episode[] = []

  constructor(private http: HttpClient) {

  }

  async ngOnInit() {
    const url = 'https://raw.githubusercontent.com/sweko/internet-programming-a98db973kwl8xp1lz94kjf0bma5pez8c/refs/heads/main/data/doctor-who-episodes.json'
    const response = await this.http.get<{episodes: Episode[]}>(url).toPromise()
    this.data = response!.episodes
  }
}

import { Component, Input } from '@angular/core';
import { Episode } from '../../model/episode';
import { EpisodeComponent } from '../episode/episode.component';

type EpisodeSortKey = 'rank' | 'name' | 'series' | 'era' | 'broadcastYear' | 'director' | 'writer' | 'doctor' | 'companion' | 'cast';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [EpisodeComponent],
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css'],
})
export class EpisodesListComponent {
  @Input() episodes: Episode[] = [];

  sortField: EpisodeSortKey = 'rank';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortEpisodes(key: EpisodeSortKey) {
    this.sortField = key;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.episodes = this.episodes.sort((a, b) => {
      let comparison = 0;

      switch (key) {
        case 'rank':
          comparison = a.rank - b.rank;
          break;
        case 'name':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'series':
          comparison = a.series - b.series;
          break;
        case 'era':
          const eraOrder = ['Classic', 'Modern', 'Recent'];
          comparison = eraOrder.indexOf(a.era) - eraOrder.indexOf(b.era);
          break;
          case 'broadcastYear':
            const dateA = new Date(a.broadcast_date).getTime();
            const dateB = new Date(b.broadcast_date).getTime();
            comparison = dateA - dateB;
            break;
        case 'director':
          comparison = a.director.localeCompare(b.director);
          break;
        case 'writer':
          comparison = a.writer.localeCompare(b.writer);
          break;
          case 'doctor':
            comparison = a.doctor.actor.localeCompare(b.doctor.actor);  // Sort by doctor's name
            break;
          case 'companion':
            comparison = a.companion.actor.localeCompare(b.companion.actor);  // Sort by companion's name
            break;
            case 'cast':
              // Compare based on number of cast members first
              comparison = a.cast.length - b.cast.length;
            
              // If the number of cast members is the same, sort by the actor names of the first cast member
              if (comparison === 0) {
                const firstActorA = a.cast[0]?.actor || ''; // Fallback to empty string if no cast
                const firstActorB = b.cast[0]?.actor || '';
                comparison = firstActorA.localeCompare(firstActorB);
              }
              break;
      }

      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }
}

import { Component, Input } from '@angular/core';
import { Episode } from '../../model/episode';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
@Input () episode: Episode = {} as Episode;

getBroadcastDate(): string {
  return this.episode.broadcast_date.substring(0,4)
}

getDoctorDisplayName(episode: Episode): string {
  return `${this.episode.doctor.actor} as ${this.episode.doctor.incarnation}`
}

getCompanionDisplayName(episode: Episode): string {
  return `${this.episode.companion.actor} as ${this.episode.companion.character}`
}

getPlotDisplay(episode: Episode): string {
  return this.episode.plot.slice(0,50)
}
}

import {Character} from './Character';

export interface Episode {
  id: number;
  title: string;
  season: number;
  number: number;
  releasedAt: string;
  characters: Character[];
}

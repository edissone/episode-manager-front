import {Gender} from './Gender';

export interface Character {
  id: number;
  name: string;
  gender: Gender;
  origin: string;
}

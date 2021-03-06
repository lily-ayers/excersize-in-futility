import { Equipment } from './equipment';

export interface Sufferer {
  maxHealth: number;
  health: number;
  strength: number;
  accuracy: number;
  defense: number;
  sensibility: number;
  stoicism: number;
  deaths: number;
  worldProgress: number;
  // 0: head
  // 1: neck
  // 2: chest
  // 3: armguards
  // 4: right hand
  // 5: left hand
  // 6: belt
  // 7: pants
  // 8: shoes
  equipment: Equipment[];
  // Inventory has been reporposed to contain perks, and has not been renamed
  // to avoid forcing players to retire in order to refresh their saves Sufferrer
  inventory: string[];
}

export interface Encounter {
  message: string;
  affectedStat?: string;
  statChange?: number;
  followUps?: number[];
  actions?: string[];
}

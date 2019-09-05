export interface Encounter {
  message: string;
  affectedStats?: string[];
  statChange?: number[];
  // Contains encounter to use if user passes any existing skill checks
  followUps: number[];
  actions?: string[];
  // Tracks if having enough of a stat unlocks additional actions
  // each array contains the required stat name, followed by amount needed for action to appear, followed by the action, then followUp
  actionRequirements?: string[][];
  // **skillchecks should maintain their associated action's index
  // each array contains the required stat name, followed by amount needed for action to succeed,
  // followed by the followUp on fail
  actionSkillCheck?: string[][];
  enemy?: string;
}

export interface RecordOfExistance {
  // Primary Currency
  stress: number;
  // 1 quadrillion stress
  pressure: number;
  // 1 quadrillion pressure
  tension: number;
  // 1 quadrillion tension
  strain: number;

  // Secondary Currencies
  clones: number;
  brokenPocketWatches: number;

  // Ascension Currency(life experience does nothing, but becoems Deja Vu)
  lifeExperience: number;
  dejaVu: number;

  // Transcension Currency(Temporary Anguish does nothing, but becoems Eternal Suffering)
  temporaryAnguish: number;
  eternalSuffering: number;

  // Stress Per Second Income, for displaying to user
  stressPerSecond: number;
  stressPerTick: number;

  // Multipliers Owned Array:
  // 0: # of Despair Owned
  // 1: # of Dread Owned
  // 2: # of Memes Owned
  // 3: # of Debt Owned
  multipliersOwned: number[];

  // Multiplier Prices Array:
  // 0: Despair Price
  // 1: Dread Price
  // 2: Memes Price
  // 3: Debt Price
  multiplierPrices: number[];

  // Multiplier Base Prices Array:
  // 0: Despair Base Price
  // 1: Dread Base Price
  // 2: Memes Base Price
  // 3: Debt Base Price
  multiplierBasePrices: number[];

  // Influenced Array:
  // 0: # of Nihilists Owned
  // 1: # of Chainsmokers Owned
  // 2: # of Dropouts Owned
  // 3: # of Actors Owned
  // 4: # of Drummers Owned
  // 5: # of Psychologists Owned
  // 6: # of Majors Owned
  // 7: # of Writers Owned
  // 8: # of Lawyers Owned
  // 9: # of Woke Clones Owned
  // 10: # of Sad Clones Owned
  // 11: # of Losers Owned
  // 12: # of Nietzsche Clones Owned
  // 13: # of Beckett Clones Owned
  // 14: # of Sartre Clones Owned
  influenced: number[];

  // Influence Prices Array:
  // 0: Nihilist Price
  // 1: Chainsmoker Price
  // 2: Dropout Price
  // 3: Actor Price
  // 4: Drummer Price
  // 5: Psychologists Price
  // 6: Majors Price
  // 7: Writers Price
  // 8: Lawyers Price
  // 9: Woke Clones Price
  // 10: Sad Clones Price
  // 11: Losers Price
  // 12: Nietzsche Price
  // 13: Beckett Price
  // 14: Sartre Price
  influencePrices: number[];

  // Influence Base Prices Array:
  // 0: Nihilist Base Price
  // 1: Chainsmoker Base Price
  // 2: Dropout Base Price
  // 3: Actor Base Price
  // 4: Drummer Base Price
  // 5: Psychologists Base Price
  // 6: Majors Base Price
  // 7: Writers Base Price
  // 8: Lawyers Base Price
  // 9: Woke Clones Base Price
  // 10: Sad Clones Base Price
  // 11: Losers Base Price
  // 12: Nietzsche Base Price
  // 13: Beckett Base Price
  // 14: Sartre Base Price
  influenceBasePrices: number[];

  // Clone Prices Array:
  // 0: Woke Clone Cost (in Clones)
  // 1: Sad Clone Cost (in Clones)
  // 2: Loser Cost (in Clones)
  // 3: Nietzsche Cost (in Clones)
  // 4: Beckett Cost (in Clones)
  // 5: Sartre Cost (in Clones)
  clonePrices: number[];

  // Watch Prices Array:
  // 0: Nietzsche Cost (in Watches)
  // 1: Beckett Cost (in Watches)
  // 2: Sartre Cost (in Watches)
  watchPrices: number[];

  // Triggers for unlocking new components
  triggerStatus: boolean;
  triggerEfficiency: boolean;
  triggerInfluence: boolean;
  triggerOutsourcing: boolean;
  triggerMarriage: boolean;
  triggerCloningMachine: boolean;
  triggerTimeMachine: boolean;
  triggerAscension: boolean;
  triggerTranscension: boolean;
  triggerAutomation: boolean;
}

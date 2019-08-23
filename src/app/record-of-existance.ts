export interface RecordOfExistance {
  // Primary Currency
  stress: number;
  // Manual Speed Modifier
  accumulatedDespair: number;
  currentDespairPrice: number;
  // Manual Value Modifier
  wallowedDread: number;
  currentDreadPrice: number;
  // Idle Speed Modifier
  nihilisticMemes: number;
  currentMemePrice: number;
  // Idle Value Modifier
  studentDebt: number;
  currentDebtPrice: number;
  // Idle Stress Production Tier 1
  unenthusiasticNihilists: number;
  currentNihilistPrice: number;
  // Idle Stress Production Tier 2
  chainsmokingTeenagers: number;
  currentChainsmokerPrice: number;
  // Idle Stress Production Tier 3
  dropoutPhilosophyMajors: number;
  currentDropoutCost: number;
  // Idle Stress Production Tier 4
  methodActors: number;
  currentActorCost: number;
  // Idle Stress Production Tier 5
  upAndComingDrummers: number;
  currentDrummerCost: number;
  // Idle Stress Production Tier 6
  overlySelfAwarePsychologists: number;
  currentPsychologistCost: number;
  // Idle Stress Production Tier 7
  philosophyMajors: number;
  currentMajorCost: number;
  // Idle Stress Production Tier 8
  alcoholicWriters: number;
  currentWriterCost: number;
  // Idle Stress Production Tier 10 (10+ only available with cloning machine)
  clonesThatKnowTheyAreAClone: number;
  currentWokeCloneCost: number;
  // Idle Stress Production Tier 11
  clonesThatWishTheyWereAsGoodAsTheOriginals: number;
  currentSadCloneCost: number;
  // Idle Stress Production Tier 12
  peopleWithClonesThatHaveSurpassedThem: number;
  currentLoserCost: number;
  // Idle Stress Production Tier 13 (13+ only available with time machine)
  clonesOfNietzsche: number;
  currentNietzscheCost: number;
  // Idle Stress Production Tier 14
  clonesOfSamuelBeckett: number;
  currentBeckettCost: number;
  // Idle Stress Production Tier 15
  clonesOfJeanPaulSartre: number;
  currentSartreCost: number;
  // triggers for unlocking parts of Display menu
  triggerStatus: boolean;
  triggerEfficiency: boolean;
  triggerInfluence: boolean;
  triggerOutsourcing: boolean;
  triggerCloningMachine: boolean;
  triggerTimeMachine: boolean;
}

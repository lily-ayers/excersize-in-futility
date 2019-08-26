export interface RecordOfExistance {
  // Primary Currency
  stress: number;
  // Secondary Currencies
  clones: number;
  brokenPocketWatches: number;
  // Ascension Currency
  dejaVu: number;
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
  // Idle Stress Production Tier 9
  recentlyDivorcedDivorceLawyer: number;
  currentLawyerCost: number;
  // Idle Stress Production Tier 10 (10+ only available with cloning machine)(costs stress and clones)
  clonesThatKnowTheyAreAClone: number;
  currentWokeCloneCost: number;
  currentWokeCloneCloneCost: number;
  // Idle Stress Production Tier 11
  clonesThatWishTheyWereAsGoodAsTheOriginals: number;
  currentSadCloneCost: number;
  currentSadCloneCloneCost: number;
  // Idle Stress Production Tier 12
  peopleWithClonesThatHaveSurpassedThem: number;
  currentLoserCost: number;
  currentLoserCloneCost: number;
  // Idle Stress Production Tier 13 (13+ only available with time machine)(costs stress, clones, and broken pocket watches)
  clonesOfNietzsche: number;
  currentNietzscheCost: number;
  currentNietzscheCloneCost: number;
  currentNietzscheWatchCost: number;
  // Idle Stress Production Tier 14
  clonesOfSamuelBeckett: number;
  currentBeckettCost: number;
  currentBeckettCloneCost: number;
  currentBeckettWatchCost: number;
  // Idle Stress Production Tier 15
  clonesOfJeanPaulSartre: number;
  currentSartreCost: number;
  currentSartreCloneCost: number;
  currentSartreWatchCost: number;
  // triggers for unlocking parts of Display menu
  triggerStatus: boolean;
  triggerEfficiency: boolean;
  triggerInfluence: boolean;
  triggerOutsourcing: boolean;
  triggerMarriage: boolean;
  triggerCloningMachine: boolean;
  triggerTimeMachine: boolean;
}

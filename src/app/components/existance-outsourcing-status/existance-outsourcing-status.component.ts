import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';

@Component({
  selector: 'app-existance-outsourcing-status',
  templateUrl: './existance-outsourcing-status.component.html',
  styleUrls: ['./existance-outsourcing-status.component.scss']
})
export class ExistanceOutsourcingStatusComponent implements OnInit {
  @Input() record: RecordOfExistance;
  influenceDetails = [
    'Its hard to tell if their Nihilism or their lack of enthusiasm is more stress-inducing.',
    'The pile of cigarettes around their feet is honestly impressive at this point.',
    'You wonder if their inability to spell your name on the coffee cup has something to do with them failing PHRE 230.',
    'If they annoy you while "in character", is it fair game to punch them "in character"?',
    'Youre pretty sure they dont even have a band, theyre just banging their sticks on every surface they find.',
    'They spent the whole session psychoanalyzing their sitting posture and its relation to their inadequacy.',
    'Honestly these people were probably better off working at the coffee shop than finishing their degree. Theyd talk less.',
    // tslint:disable-next-line: max-line-length
    'Hemmingway once took a young worker aside at the Quik-Trip where he bought his 4-Loko and told him "Anything less than 16 Lokos is for bitches, son."',
    'You struck out at Speed Dating, but you did make friends with the guy who caught his wife at the event.',
    // tslint:disable-next-line: max-line-length
    'It was hysterical, the look on their face when you told them was like the reverse of those stories where, like, a photographer takes a photo before and after telling someone theyre beautiful.',
    // tslint:disable-next-line: max-line-length
    'You tried to make them feel better by showing them they came from something amazing, but it seems to have given them a complex. Your bad.',
    // tslint:disable-next-line: max-line-length
    'Well you made the clone feel better, but now the original seems to be getting a complex about the whole thing. You really screwed this up, didnt you.',
    'You just wanted to grab some 19th century scholar, and you ended up with this prick. At least it wasnt Freud.',
    'Well, at least this one has a sense of humor. He really hates women though, like REEEEALLY hates women. And his dad. Hes got issues.',
    'Finally, someone talented, respectful, and loaded with existentialist despair.'
  ];

  influencedNames = [
    'Unenthusiastic Nihilists',
    'Chainsmoking Teenagers',
    'Dropout Philosophy Majors',
    'Method Actors',
    'Up and Coming Drummers',
    'Overly Self-Aware Psychologists',
    'Philosophy Majors',
    'Alcoholic Writers',
    'Recently Divorced Divorce Lawyers',
    'Clones That Know They are a Clone',
    'Clones That Wish They Were As Good As The Original',
    'People With Clones That Have Surpassed Them',
    'Clones of Friedrich Nietzsche',
    'Clones of Samuel Beckett',
    'Clones of Jean-Paul Sartre'
  ]

  constructor() { }

  ngOnInit() {
  }

}

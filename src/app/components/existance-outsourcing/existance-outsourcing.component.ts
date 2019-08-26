import { Component, OnInit, Input } from '@angular/core';
import { RecordOfExistance } from 'src/app/record-of-existance';
import { RegistrarService } from 'src/app/registrar.service';

@Component({
  selector: 'app-existance-outsourcing',
  templateUrl: './existance-outsourcing.component.html',
  styleUrls: ['./existance-outsourcing.component.scss']
})
export class ExistanceOutsourcingComponent implements OnInit {
  @Input() record: RecordOfExistance;

  constructor(private registrar: RegistrarService) { }

  ngOnInit() {
  }

  influence(influencee: string) {
    switch (influencee) {
      case 'nihilist':
        this.registrar.contemplateNietchzhe();
        break;
      case 'chainsmoker':
        this.registrar.lendSomeoneACigarette();
        break;
      case 'dropout':
        this.registrar.quoteSartreInACoffeeShop();
        break;
      case 'actor':
        this.registrar.misquoteShakespeare();
        break;
      case 'drummer':
        this.registrar.attendLocalConcert();
        break;
      case 'psychologist':
        this.registrar.getTherapy();
        break;
      case 'major':
        this.registrar.replyToEverythingWithWhy();
        break;
      case 'writer':
        this.registrar.bringWhiskeyToABookSigning();
        break;
      case 'lawyer':
        this.registrar.speedDateAtALocalBar();
        break;
      case 'wokeclone':
        this.registrar.tellACloneThatTheyreAClone();
        break;
      case 'sadclone':
        this.registrar.talkToACloneAboutHowGreatTheirOriginalIs();
        break;
      case 'loser':
        this.registrar.getACloneTherapyAndShowTheOriginalTheResult();
        break;
      case 'nietzsche':
        this.registrar.cloneTheFirstLoserYouThinkOf();
        break;
      case 'beckett':
        this.registrar.cloneSomeoneLessLame();
        break;
      case 'sartre':
        this.registrar.cloneSomeoneLessSexist();
        break;
      default:
        break;
    }
  }
}

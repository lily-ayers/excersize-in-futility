import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../registrar.service';

@Component({
  selector: 'app-distress-dispensary',
  templateUrl: './distress-dispensary.component.html',
  styleUrls: ['./distress-dispensary.component.scss']
})
export class DistressDispensaryComponent implements OnInit {
  products = [{ perk: 'Manual Stress + 20% of SPS', cost: 5, bought: false },
  { perk: 'Double All Stress', cost: 10, bought: false },
  { perk: 'Double Deja Vu', cost: 5, bought: false }, { perk: 'Triple Deja Vu', cost: 50, bought: false },
  { perk: 'Double Eternal Suffering', cost: 100, bought: false }, { perk: 'Double Stat Gains', cost: 15, bought: false }];

  constructor(private registrar: RegistrarService) {
    if (registrar.record.perks && registrar.record.perks.length >= 0) {
      for (const perk of this.products) {
        if (registrar.record.perks.includes(perk.perk)) {
          const obtained = this.products.findIndex(data => data === perk);
          this.products.slice(obtained);
        }
      }
    }
   }

  ngOnInit() {
  }

  purchase(product) {
    if (this.registrar.record.eternalSuffering >= product.cost && product.bought) {
      this.registrar.record.eternalSuffering -= product.cost;
      this.registrar.record.perks.push(product.perk);
      this.registrar.purchaseDistress();
    } else if (this.registrar.record.eternalSuffering >= product.cost) {
      product.bought = true;
    }
  }
}

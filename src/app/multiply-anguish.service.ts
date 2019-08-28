import { Injectable, Renderer2, RendererFactory2, HostListener } from '@angular/core';
import { RegistrarService } from './registrar.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyAnguishService {
  multTen = false;
  multTwentyFive = false;

  constructor(private registrar: RegistrarService) {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if ((event.code === 'ShiftLeft' || event.code === 'ControlLeft') && !this.multTen && !this.multTwentyFive) {
        this.onMultiply(event);
      }
    });
    window.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.code === 'ShiftLeft' || event.code === 'ControlLeft') {
        this.onUnMultiply();
      }
    });
   }

  onMultiply(event: KeyboardEvent) {
    if (event.code === 'ShiftLeft' && !this.multTwentyFive) {
      for (let p = 0; p < this.registrar.record.multiplierPrices.length; p++) {
        for (let i = 1; i < 10; i++) {
          this.registrar.record.multiplierPrices[p] +=
                (this.registrar.record.multiplierBasePrices[p] * Math.pow(1.1, this.registrar.record.multipliersOwned[p] + i));
        }
      }
      for (let p = 0; p < this.registrar.record.influencePrices.length; p++) {
        for (let i = 1; i < 10; i++) {
          this.registrar.record.influencePrices[p] +=
                (this.registrar.record.influenceBasePrices[p] * Math.pow(1.1, this.registrar.record.influenced[p] + i));
        }
      }
      this.multTen = true;
    }
    if (event.code === 'ControlLeft' && !this.multTen) {
      for (let p = 0; p < this.registrar.record.multiplierPrices.length; p++) {
        for (let i = 1; i < 25; i++) {
          this.registrar.record.multiplierPrices[p] +=
                (this.registrar.record.multiplierBasePrices[p] * Math.pow(1.1, this.registrar.record.multipliersOwned[p] + i));
        }
      }
      for (let p = 0; p < this.registrar.record.influencePrices.length; p++) {
        for (let i = 1; i < 25; i++) {
          this.registrar.record.influencePrices[p] +=
                (this.registrar.record.influenceBasePrices[p] * Math.pow(1.1, this.registrar.record.influenced[p] + i));
        }
      }
      this.multTwentyFive = true;
    }
  }

  onUnMultiply() {
    for (let p = 0; p < this.registrar.record.multiplierPrices.length; p++) {
      this.registrar.record.multiplierPrices[p] = (this.registrar.record.multiplierBasePrices[p]
        * Math.pow(1.1, this.registrar.record.multipliersOwned[p]));
    }
    for (let p = 0; p < this.registrar.record.influencePrices.length; p++) {
      this.registrar.record.influencePrices[p] = (this.registrar.record.influenceBasePrices[p]
        * Math.pow(1.1, this.registrar.record.influenced[p]));
    }
    this.multTen = false;
    this.multTwentyFive = false;
  }
}

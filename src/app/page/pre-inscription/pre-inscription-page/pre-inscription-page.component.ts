import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-inscription-page',
  templateUrl: './pre-inscription-page.component.html',
  styleUrls: ['./pre-inscription-page.component.scss']
})
export class PreInscriptionPageComponent implements OnInit {

  sliders: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  etablisementSelected() {

    this.sliders = 2;

  }

  precedentButton() {
    this.sliders--;
  }

  suivantButton() {
    // if(this.sliders<6)
       this.sliders++;
  }
}

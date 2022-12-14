import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInscriptionPageComponent } from './pre-inscription-page.component';

describe('PreInscriptionPageComponent', () => {
  let component: PreInscriptionPageComponent;
  let fixture: ComponentFixture<PreInscriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreInscriptionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreInscriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

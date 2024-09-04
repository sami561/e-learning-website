import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnseignantComponent } from './details-enseignant.component';

describe('DetailsEnseignantComponent', () => {
  let component: DetailsEnseignantComponent;
  let fixture: ComponentFixture<DetailsEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

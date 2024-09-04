import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnseignantComponent } from './update-enseignant.component';

describe('UpdateEnseignantComponent', () => {
  let component: UpdateEnseignantComponent;
  let fixture: ComponentFixture<UpdateEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

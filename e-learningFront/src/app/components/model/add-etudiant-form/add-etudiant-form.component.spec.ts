import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantFormComponent } from './add-etudiant-form.component';

describe('AddEtudiantFormComponent', () => {
  let component: AddEtudiantFormComponent;
  let fixture: ComponentFixture<AddEtudiantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtudiantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEtudiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

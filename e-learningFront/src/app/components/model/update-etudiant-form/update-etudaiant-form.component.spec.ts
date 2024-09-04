import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudaiantFormComponent } from './update-etudaiant-form.component';

describe('UpdateEtudaiantFormComponent', () => {
  let component: UpdateEtudaiantFormComponent;
  let fixture: ComponentFixture<UpdateEtudaiantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtudaiantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtudaiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoursComponent } from './details-cours.component';

describe('DetailsCoursComponent', () => {
  let component: DetailsCoursComponent;
  let fixture: ComponentFixture<DetailsCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

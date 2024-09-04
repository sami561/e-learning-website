import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCategorieComponent } from './details-categorie.component';

describe('DetailsCategorieComponent', () => {
  let component: DetailsCategorieComponent;
  let fixture: ComponentFixture<DetailsCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

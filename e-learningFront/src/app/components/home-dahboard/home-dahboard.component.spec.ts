import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDahboardComponent } from './home-dahboard.component';

describe('HomeDahboardComponent', () => {
  let component: HomeDahboardComponent;
  let fixture: ComponentFixture<HomeDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDahboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

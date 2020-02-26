import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomreComponent } from './homre.component';

describe('HomreComponent', () => {
  let component: HomreComponent;
  let fixture: ComponentFixture<HomreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

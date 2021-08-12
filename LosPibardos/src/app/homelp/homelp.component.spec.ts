import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelpComponent } from './homelp.component';

describe('HomelpComponent', () => {
  let component: HomelpComponent;
  let fixture: ComponentFixture<HomelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlpComponent } from './navbarlp.component';

describe('NavbarlpComponent', () => {
  let component: NavbarlpComponent;
  let fixture: ComponentFixture<NavbarlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

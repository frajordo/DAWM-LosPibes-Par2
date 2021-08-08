import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlpComponent } from './footerlp.component';

describe('FooterlpComponent', () => {
  let component: FooterlpComponent;
  let fixture: ComponentFixture<FooterlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

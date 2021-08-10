import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipallpComponent } from './principallp.component';

describe('PrincipallpComponent', () => {
  let component: PrincipallpComponent;
  let fixture: ComponentFixture<PrincipallpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipallpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipallpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

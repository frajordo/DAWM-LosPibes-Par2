import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactslpComponent } from './contactslp.component';

describe('ContactslpComponent', () => {
  let component: ContactslpComponent;
  let fixture: ComponentFixture<ContactslpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactslpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactslpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarselpComponent } from './registrarselp.component';

describe('RegistrarselpComponent', () => {
  let component: RegistrarselpComponent;
  let fixture: ComponentFixture<RegistrarselpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarselpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarselpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

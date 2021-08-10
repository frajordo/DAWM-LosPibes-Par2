import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdminlpComponent } from './principal-adminlp.component';

describe('PrincipalAdminlpComponent', () => {
  let component: PrincipalAdminlpComponent;
  let fixture: ComponentFixture<PrincipalAdminlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAdminlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdminlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

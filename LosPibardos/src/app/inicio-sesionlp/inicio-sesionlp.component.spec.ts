import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionlpComponent } from './inicio-sesionlp.component';

describe('InicioSesionlpComponent', () => {
  let component: InicioSesionlpComponent;
  let fixture: ComponentFixture<InicioSesionlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaslpComponent } from './noticiaslp.component';

describe('NoticiaslpComponent', () => {
  let component: NoticiaslpComponent;
  let fixture: ComponentFixture<NoticiaslpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaslpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaslpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExperienciaComponent } from './agregar-experiencia.component';

describe('AgregarExperienciaComponent', () => {
  let component: AgregarExperienciaComponent;
  let fixture: ComponentFixture<AgregarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

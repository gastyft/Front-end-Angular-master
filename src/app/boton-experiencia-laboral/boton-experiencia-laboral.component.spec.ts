import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonExperienciaLaboralComponent } from './boton-experiencia-laboral.component';

describe('BotonExperienciaLaboralComponent', () => {
  let component: BotonExperienciaLaboralComponent;
  let fixture: ComponentFixture<BotonExperienciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonExperienciaLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

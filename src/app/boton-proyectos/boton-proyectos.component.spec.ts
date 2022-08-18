import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProyectosComponent } from './boton-proyectos.component';

describe('BotonProyectosComponent', () => {
  let component: BotonProyectosComponent;
  let fixture: ComponentFixture<BotonProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

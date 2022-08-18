import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyectosComponent } from './agregar-proyectos.component';

describe('AgregarProyectosComponent', () => {
  let component: AgregarProyectosComponent;
  let fixture: ComponentFixture<AgregarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

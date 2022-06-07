import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEstudiosComponent } from './boton-estudios.component';

describe('BotonEstudiosComponent', () => {
  let component: BotonEstudiosComponent;
  let fixture: ComponentFixture<BotonEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

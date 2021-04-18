import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionusuariosComponent } from './modificacionusuarios.component';

describe('ModificacionusuariosComponent', () => {
  let component: ModificacionusuariosComponent;
  let fixture: ComponentFixture<ModificacionusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasDashboardComponent } from './consultas-dashboard.component';

describe('ConsultasDashboardComponent', () => {
  let component: ConsultasDashboardComponent;
  let fixture: ComponentFixture<ConsultasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

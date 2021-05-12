import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConstruccionComponent } from './template-construccion.component';

describe('TemplateConstruccionComponent', () => {
  let component: TemplateConstruccionComponent;
  let fixture: ComponentFixture<TemplateConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

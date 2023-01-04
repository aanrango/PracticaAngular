import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPaisComponent } from './registro-pais.component';

describe('RegistroPaisComponent', () => {
  let component: RegistroPaisComponent;
  let fixture: ComponentFixture<RegistroPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

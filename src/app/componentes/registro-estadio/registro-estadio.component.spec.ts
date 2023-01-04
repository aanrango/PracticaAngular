import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstadioComponent } from './registro-estadio.component';

describe('RegistroEstadioComponent', () => {
  let component: RegistroEstadioComponent;
  let fixture: ComponentFixture<RegistroEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEstadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

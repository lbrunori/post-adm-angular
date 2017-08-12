import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPublicacionComponent } from './registrar-publicacion.component';

describe('RegistrarPublicacionComponent', () => {
  let component: RegistrarPublicacionComponent;
  let fixture: ComponentFixture<RegistrarPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

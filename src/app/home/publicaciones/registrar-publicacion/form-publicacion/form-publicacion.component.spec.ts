import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublicacionComponent } from './form-publicacion.component';

describe('FormPublicacionComponent', () => {
  let component: FormPublicacionComponent;
  let fixture: ComponentFixture<FormPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

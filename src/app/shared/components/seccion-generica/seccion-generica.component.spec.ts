import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGenericaComponent } from './seccion-generica.component';

describe('SeccionGenericaComponent', () => {
  let component: SeccionGenericaComponent;
  let fixture: ComponentFixture<SeccionGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionGenericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

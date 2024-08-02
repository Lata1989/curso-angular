import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTioComponent } from './componente-tio.component';

describe('ComponenteTioComponent', () => {
  let component: ComponenteTioComponent;
  let fixture: ComponentFixture<ComponenteTioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteTioComponent]
    });
    fixture = TestBed.createComponent(ComponenteTioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

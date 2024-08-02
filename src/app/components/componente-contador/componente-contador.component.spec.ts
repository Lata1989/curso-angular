import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContadorComponent } from './componente-contador.component';

describe('ComponenteContadorComponent', () => {
  let component: ComponenteContadorComponent;
  let fixture: ComponentFixture<ComponenteContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteContadorComponent]
    });
    fixture = TestBed.createComponent(ComponenteContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludadorComponent } from './saludador.component';

describe('SaludadorComponent', () => {
  let component: SaludadorComponent;
  let fixture: ComponentFixture<SaludadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

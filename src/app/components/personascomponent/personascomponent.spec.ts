import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personascomponent } from './personascomponent';

describe('Personascomponent', () => {
  let component: Personascomponent;
  let fixture: ComponentFixture<Personascomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personascomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personascomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

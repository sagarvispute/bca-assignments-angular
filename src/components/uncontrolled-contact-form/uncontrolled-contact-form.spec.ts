import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledContactForm } from './uncontrolled-contact-form';

describe('UncontrolledContactForm', () => {
  let component: UncontrolledContactForm;
  let fixture: ComponentFixture<UncontrolledContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncontrolledContactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncontrolledContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

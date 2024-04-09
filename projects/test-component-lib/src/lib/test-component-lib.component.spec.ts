import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentLibComponent } from './test-component-lib.component';

describe('TestComponentLibComponent', () => {
  let component: TestComponentLibComponent;
  let fixture: ComponentFixture<TestComponentLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponentLibComponent]
    });
    fixture = TestBed.createComponent(TestComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

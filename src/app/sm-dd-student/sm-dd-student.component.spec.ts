import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmDdStudentComponent } from './sm-dd-student.component';

describe('SmDdStudentComponent', () => {
  let component: SmDdStudentComponent;
  let fixture: ComponentFixture<SmDdStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmDdStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmDdStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

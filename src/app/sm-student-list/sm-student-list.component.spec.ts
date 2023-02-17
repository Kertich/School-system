import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmStudentListComponent } from './sm-student-list.component';

describe('SmStudentListComponent', () => {
  let component: SmStudentListComponent;
  let fixture: ComponentFixture<SmStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmStudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

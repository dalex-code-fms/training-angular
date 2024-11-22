import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTrainingComponent } from './modify-training.component';

describe('ModifyTrainingComponent', () => {
  let component: ModifyTrainingComponent;
  let fixture: ComponentFixture<ModifyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

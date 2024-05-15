import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBlockFormComponent } from './name-block-form.component';

describe('NameBlockFormComponent', () => {
  let component: NameBlockFormComponent;
  let fixture: ComponentFixture<NameBlockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameBlockFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameBlockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

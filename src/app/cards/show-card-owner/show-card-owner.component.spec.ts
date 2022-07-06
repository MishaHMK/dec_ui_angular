import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardOwnerComponent } from './show-card-owner.component';

describe('ShowCardOwnerComponent', () => {
  let component: ShowCardOwnerComponent;
  let fixture: ComponentFixture<ShowCardOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCardOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCardOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

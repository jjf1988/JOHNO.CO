import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorpageComponent } from './sponsorpage.component';

describe('SponsorpageComponent', () => {
  let component: SponsorpageComponent;
  let fixture: ComponentFixture<SponsorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarMainComponent } from './dashboar-main.component';

describe('DashboarMainComponent', () => {
  let component: DashboarMainComponent;
  let fixture: ComponentFixture<DashboarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

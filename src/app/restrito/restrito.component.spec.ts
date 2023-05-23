import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoComponent } from './restrito.component';

describe('RestritoComponent', () => {
  let component: RestritoComponent;
  let fixture: ComponentFixture<RestritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestritoComponent]
    });
    fixture = TestBed.createComponent(RestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestritoComponent } from './menu-restrito.component';

describe('MenuRestritoComponent', () => {
  let component: MenuRestritoComponent;
  let fixture: ComponentFixture<MenuRestritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRestritoComponent]
    });
    fixture = TestBed.createComponent(MenuRestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

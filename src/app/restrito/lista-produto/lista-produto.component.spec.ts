import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoComponent } from './lista-produto.component';

describe('ListaProdutoComponent', () => {
  let component: ListaProdutoComponent;
  let fixture: ComponentFixture<ListaProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProdutoComponent]
    });
    fixture = TestBed.createComponent(ListaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

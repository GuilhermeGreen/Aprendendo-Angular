import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProdutoComponent } from './atualiza-produto.component';

describe('AtualizaProdutoComponent', () => {
  let component: AtualizaProdutoComponent;
  let fixture: ComponentFixture<AtualizaProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizaProdutoComponent]
    });
    fixture = TestBed.createComponent(AtualizaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

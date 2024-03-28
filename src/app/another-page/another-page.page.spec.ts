import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnotherPagePage } from './another-page.page';

describe('AnotherPagePage', () => {
  let component: AnotherPagePage;
  let fixture: ComponentFixture<AnotherPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnotherPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

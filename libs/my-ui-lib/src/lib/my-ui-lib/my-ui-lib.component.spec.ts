import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyUiLibComponent } from './my-ui-lib.component';

describe('MyUiLibComponent', () => {
  let component: MyUiLibComponent;
  let fixture: ComponentFixture<MyUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

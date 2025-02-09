import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireLibComponent } from './questionnaire-lib.component';

describe('QuestionnaireLibComponent', () => {
  let component: QuestionnaireLibComponent;
  let fixture: ComponentFixture<QuestionnaireLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnaireLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionnaireLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

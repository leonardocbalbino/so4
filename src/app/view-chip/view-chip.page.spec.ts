import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewChipPage } from './view-chip.page';

describe('ViewChipPage', () => {
  let component: ViewChipPage;
  let fixture: ComponentFixture<ViewChipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

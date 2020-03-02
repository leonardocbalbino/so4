import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDebitoPage } from './view-debito.page';

describe('ViewDebitoPage', () => {
  let component: ViewDebitoPage;
  let fixture: ComponentFixture<ViewDebitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDebitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDebitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

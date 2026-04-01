import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonballSuperPage } from './dragonball-super-page';

describe('DragonballPage', () => {
  let component: DragonballSuperPage;
  let fixture: ComponentFixture<DragonballSuperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballSuperPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DragonballSuperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

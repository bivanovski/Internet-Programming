import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesFilterComponent } from './episodes-filter.component';

describe('EpisodesFilterComponent', () => {
  let component: EpisodesFilterComponent;
  let fixture: ComponentFixture<EpisodesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

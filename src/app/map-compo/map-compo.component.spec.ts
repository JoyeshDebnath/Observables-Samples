import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCompoComponent } from './map-compo.component';

describe('MapCompoComponent', () => {
  let component: MapCompoComponent;
  let fixture: ComponentFixture<MapCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsTableComponent } from './groups-table.component';

describe('GroupsTableComponent', () => {
  let component: GroupsTableComponent;
  let fixture: ComponentFixture<GroupsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

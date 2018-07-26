import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mainMenuItems, MainMenuPath, NavigationItemType } from '../menus/main-menu';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );

  public menuItems: ReadonlyMap<NavigationItemType, MainMenuPath[]> = mainMenuItems;


  constructor(private breakpointObserver: BreakpointObserver) { }
}

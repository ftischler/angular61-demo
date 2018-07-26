export type MainMenuPath = '' | 'users' | 'settings';

export enum NavigationItemType {
  Main = 'Main',
  Users = 'Users',
  Settings = 'Settings'
}

export const mainMenuItems: ReadonlyMap<NavigationItemType, MainMenuPath[]> = new Map<NavigationItemType, MainMenuPath[]>([
  [NavigationItemType.Main, ['']],
  [NavigationItemType.Users, ['users']],
  [NavigationItemType.Settings, ['settings']]
]);

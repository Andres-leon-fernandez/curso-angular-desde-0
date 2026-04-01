import { Routes } from '@angular/router';
import { CounterPages } from './pages/counter-pages/counter-pages';
import { HeroPage } from './pages/hero-page/hero-page';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  { path: '', component: CounterPages },
  { path: 'hero', component: HeroPage },
  { path: 'dragonball', component: DragonballPage },
  { path: 'dragonball-super', component: DragonballSuperPage },
  { path: '**', component: Pagenotfound },
];

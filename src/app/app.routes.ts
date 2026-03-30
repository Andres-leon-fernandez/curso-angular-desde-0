import { Routes } from '@angular/router';
import { CounterPages } from './pages/counter-pages/counter-pages';
import { HeroPage } from './pages/hero-page/hero-page';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: CounterPages },
  { path: 'hero', component: HeroPage },
  { path: '**', component: Pagenotfound },
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav.component'
import { HomeComponent } from './home.component'
import { ProgressComponent } from './progress.component'
import { TeamComponent } from './team.component'
import { CarouselOneComponent } from './carouselone.component'

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    ProgressComponent,
    TeamComponent,
    CarouselOneComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'carouselone', component: CarouselOneComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

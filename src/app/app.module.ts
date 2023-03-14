import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NewPetalkComponent } from './components/new-petalk/new-petalk.component';
import { PetEventBoxSimpleComponent } from './components/pet-event-box-simple/pet-event-box-simple.component';
import {PetEventAudit} from './components/pet-event-box-simple/pet-event-box-simple.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YourPetCarouselComponent } from './components/your-pet-carousel/your-pet-carousel.component';
import LoginComponent from './components/login/login.component';
import { PetalkCalendarComponent } from './components/petalk-calendar/petalk-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

// import { MainNavComponent } from './components/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    BarChartComponent,
    LineChartComponent,
    MainNavComponent,
    NewPetalkComponent,
    PetEventBoxSimpleComponent,
    YourPetCarouselComponent,
    LoginComponent,
    PetalkCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    RouterModule.forRoot([
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'petalk_calendar',
        component: PetalkCalendarComponent
      },
      {
        path: 'new-petalk',
        component: NewPetalkComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
      
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesSportsComponent } from './games-sports/games-sports.component';
import { CricketComponent } from './cricket/cricket.component';
import { BatmintonComponent } from './batminton/batminton.component';
import { StadiumComponent } from './stadium/stadium.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BookedComponent } from './booked/booked.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'homepage',component:HomePageComponent},
    {path:'games',component:GamesSportsComponent},
    {path:'cricket',component:CricketComponent},
    {path:'batminton',component:BatmintonComponent},
    {path:'stadium',component:StadiumComponent},
    {path:'book',component:BooknowComponent},
    {path:'booked',component:BookedComponent},
    {path:'booking',component:BookingComponent}
    
];

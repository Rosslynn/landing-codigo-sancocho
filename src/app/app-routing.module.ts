import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { LandingpageComponent } from "./pages/landingpage/landingpage.component";

const routes: Routes = [
  { path: "", component: LandingpageComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule { }

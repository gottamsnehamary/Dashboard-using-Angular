// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }

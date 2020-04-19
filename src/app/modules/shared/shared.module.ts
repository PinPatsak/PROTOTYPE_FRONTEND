import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        PageNotFoundComponent,
    ]
})
export class SharedModule { }

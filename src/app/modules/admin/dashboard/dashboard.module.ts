import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DataService } from './data.service';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


@NgModule({
    declarations: [HomeComponent,
        StatComponent,
        BarChartComponent,
        DonutChartComponent,
        LineChartComponent,
        PieChartComponent,
        PolarChartComponent

        , RadarChartComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        Ng2Charts
    ],
    providers: [DataService]
})
export class DashboardModule { }

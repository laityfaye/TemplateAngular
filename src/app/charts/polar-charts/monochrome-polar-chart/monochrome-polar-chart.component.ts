import { Component } from '@angular/core';
import { MonochromePolarChartService } from './monochrome-polar-chart.service';

@Component({
    selector: 'app-monochrome-polar-chart',
    imports: [],
    templateUrl: './monochrome-polar-chart.component.html',
    styleUrl: './monochrome-polar-chart.component.scss'
})
export class MonochromePolarChartComponent {

    constructor(
        private monochromePolarChartService: MonochromePolarChartService
    ) {}

    ngOnInit(): void {
        this.monochromePolarChartService.loadChart();
    }

}
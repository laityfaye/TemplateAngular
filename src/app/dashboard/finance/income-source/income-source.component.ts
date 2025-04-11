import { Component } from '@angular/core';
import { IncomeSourceService } from './income-source.service';

@Component({
    selector: 'app-income-source',
    imports: [],
    templateUrl: './income-source.component.html',
    styleUrl: './income-source.component.scss'
})
export class IncomeSourceComponent {

    constructor(
        private incomeSourceService: IncomeSourceService
    ) {}

    ngOnInit(): void {
        this.incomeSourceService.loadChart();
    }

}
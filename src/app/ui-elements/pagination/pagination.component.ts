import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pagination',
    imports: [RouterLink],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss'
})
export class PaginationComponent {}
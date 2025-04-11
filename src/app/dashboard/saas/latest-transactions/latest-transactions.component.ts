import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-latest-transactions',
    imports: [NgIf],
    templateUrl: './latest-transactions.component.html',
    styleUrl: './latest-transactions.component.scss'
})
export class LatestTransactionsComponent {

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-dropdown')) {
            this.isCardHeaderOpen = false;
        }
    }

}
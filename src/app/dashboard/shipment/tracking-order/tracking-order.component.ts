import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tracking-order',
    imports: [NgIf, RouterLink],
    templateUrl: './tracking-order.component.html',
    styleUrl: './tracking-order.component.scss'
})
export class TrackingOrderComponent {
    
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
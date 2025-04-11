import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-staff-performance-scores',
    imports: [NgIf],
    templateUrl: './staff-performance-scores.component.html',
    styleUrl: './staff-performance-scores.component.scss'
})
export class StaffPerformanceScoresComponent {

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
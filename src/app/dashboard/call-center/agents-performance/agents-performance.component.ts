import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-agents-performance',
    imports: [NgIf],
    templateUrl: './agents-performance.component.html',
    styleUrl: './agents-performance.component.scss'
})
export class AgentsPerformanceComponent {

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
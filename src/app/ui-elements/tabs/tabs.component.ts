import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconTabsComponent } from './icon-tabs/icon-tabs.component';

@Component({
    selector: 'app-tabs',
    imports: [RouterLink, NgClass, NgIf, IconTabsComponent],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
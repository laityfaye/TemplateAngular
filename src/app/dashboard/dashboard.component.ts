import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
    selector: 'app-dashboard',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
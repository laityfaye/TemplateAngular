import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-recent-property',
    imports: [RouterLink, CarouselModule],
    templateUrl: './recent-property.component.html',
    styleUrl: './recent-property.component.scss'
})
export class RecentPropertyComponent {

    // Owl Carousel
    recentPropertySlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

}
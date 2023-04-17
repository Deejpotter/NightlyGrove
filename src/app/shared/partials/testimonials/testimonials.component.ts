import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [
    {
      name: 'Alice',
      text: 'Moonlit Moods has some of the most unique clothing I have ever seen. I love the inspiration from the night sky!',
    },
    {
      name: 'Bob',
      text: 'I bought a dress from Moonlit Moods, and it quickly became my favorite piece of clothing. The quality and design are amazing!',
    },
    {
      name: 'Charlie',
      text: 'I cannot recommend Moonlit Moods enough! Their clothing is stylish, comfortable, and perfect for night owls like me.',
    },
  ];

  testimonialCarouselOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    nav: false,
    dots: false,
  };

  constructor() {}

  ngOnInit(): void {}
}

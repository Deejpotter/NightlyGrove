import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements AfterViewInit {
  featuredProducts: any[] = [
    {
      name: 'Moonlit Dress',
      description: 'Elegant and comfortable, perfect for nighttime strolls',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      name: 'Starry Night Top',
      description: 'A stylish top with star-inspired patterns',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      name: 'Galaxy Leggings',
      description: 'Comfortable leggings with a cosmic design',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      name: 'Celestial Skirt',
      description: 'A skirt inspired by the beauty of the night sky',
      image: 'https://via.placeholder.com/350x150',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor() {}

  ngAfterViewInit(): void {}
}

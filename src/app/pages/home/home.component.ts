// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;

  featuredProducts = [
    // Add your featured product data objects here
  ];

  testimonials = [
    // Add your testimonials data objects here
  ];

  sustainabilityFeatures = [
    // Add your sustainability feature data objects here
  ];

  latestBlogPosts = [
    // Add your latest blog post data objects here
  ];

  partners = [
    // Add your partner data objects here
  ];

  constructor() {}

  ngOnInit() {}
}

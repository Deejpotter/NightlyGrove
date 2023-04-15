import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit {
  blogPosts: any[] = [
    {
      title: 'Discover the Inspiration Behind Our Latest Collection',
      summary: 'Learn more about the night sky and how it inspired our latest designs...',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'How to Style Your Moonlit Moods Outfits',
      summary: 'Get some fashion tips and ideas for styling your Moonlit Moods clothing...',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'The Story of Moonlit Moods: From Idea to Reality',
      summary: 'Discover the journey of Moonlit Moods from a simple idea to a successful fashion brand...',
      image: 'https://via.placeholder.com/350x150',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

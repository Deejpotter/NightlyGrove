import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() gradientFrom: string = 'primary';
  @Input() gradientTo: string = 'light';
  @Input() textColour: string = 'dark';
  constructor() {}

  ngOnInit(): void {}
}

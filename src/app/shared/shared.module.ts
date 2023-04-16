import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from '@app/shared/partials/loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './partials/hero-section/hero-section.component';
import { FeaturedProductsComponent } from './partials/featured-products/featured-products.component';
import { SustainabilityComponent } from './partials/sustainability/sustainability.component';
import { BlogPostsComponent } from './partials/blog-posts/blog-posts.component';
import { PartnersComponent } from './partials/partners/partners.component';
import { SocialMediaLinksComponent } from './partials/social-media-links/social-media-links.component';
import { NewsletterSignupComponent } from './partials/newsletter-signup/newsletter-signup.component';
import { TestimonialsComponent } from './partials/testimonials/testimonials.component';
import { BrandStoryComponent } from '@app/shared/partials/brand-story/brand-story.component';
import { BrandImageComponent } from '@app/shared/partials/brand-image/brand-image.component';
import { ProductCardComponent } from './partials/product-card/product-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ColourSwatchComponent } from './partials/colour-swatch/colour-swatch.component';

@NgModule({
  imports: [TranslateModule, CommonModule, CarouselModule],
  declarations: [
    LoaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    SustainabilityComponent,
    BlogPostsComponent,
    PartnersComponent,
    SocialMediaLinksComponent,
    BrandStoryComponent,
    NewsletterSignupComponent,
    SocialMediaLinksComponent,
    BrandImageComponent,
    TestimonialsComponent,
    ProductCardComponent,
    ColourSwatchComponent,
  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    SocialMediaLinksComponent,
    SustainabilityComponent,
    NewsletterSignupComponent,
    TestimonialsComponent,
    BlogPostsComponent,
    PartnersComponent,
    BrandImageComponent,
    BrandStoryComponent,
    ColourSwatchComponent,
  ],
})
export class SharedModule {}

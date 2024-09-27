import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CaseStudiesComponent } from "./case-studies/case-studies.component";
import { TestimonialComponent } from "./testimonial-upper/testimonial.component";
import { TestimonialLowerComponent } from "./testimonial-lower/testimonial-lower.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, OurServicesComponent, OurStoryComponent, WhyChooseUsComponent, CaseStudiesComponent, TestimonialComponent, TestimonialLowerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

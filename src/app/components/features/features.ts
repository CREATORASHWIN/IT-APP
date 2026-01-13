import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FeatureItem = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css'],
})
export class Features {
  features: FeatureItem[] = [
    {
      title: 'Security-First Approach',
      desc: 'Best practices, secure coding, and risk reduction built into every project.',
      img: 'secure.png',
      alt: 'Security First',
    },
    {
      title: 'High Performance',
      desc: 'Fast loading, optimized UX, and scalable architecture for modern workloads.',
      img: 'performance.png',
      alt: 'High Performance',
    },
    {
      title: 'Ongoing Support',
      desc: 'Reliable maintenance, updates, and quick issue resolution after launch.',
      img: 'support.png',
      alt: 'Support',
    },
    {
      title: 'On-Time Delivery',
      desc: 'Clear milestones, transparent communication, and predictable delivery timelines.',
      img: 'delivery.png',
      alt: 'On Time Delivery',
    },
  ];

  trackByTitle = (_: number, item: FeatureItem) => item.title;
}

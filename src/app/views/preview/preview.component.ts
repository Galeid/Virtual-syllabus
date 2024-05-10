import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLibrary } from '@ng-icons/ionicons';

import { AccordionModule } from '../../components/accordion/accordion.module';
import { DividerComponent } from '../../components/divider/divider.component';

interface ICourse {
  name: string;
  sections: { name: string; topics: { name: string }[] }[];
}

const coursesData: ICourse[] = [
  {
    name: 'Algebra',
    sections: [
      {
        name: 'Basic Concepts',
        topics: [
          { name: 'Inequality' },
          { name: 'Linear Equations' },
          { name: 'Quadratic Equations' },
          { name: 'Polynomials' },
          { name: 'Sequences' },
          { name: 'Formulas' },
          { name: 'Matrices' },
          { name: 'Determinants' },
          { name: 'Vectors' },
          { name: 'Complex Numbers' },
          { name: 'Logarithms and Exponents' },
        ],
      },
      {
        name: 'Advanced Concepts',
        topics: [
          { name: 'Complex Numbers' },
          { name: 'Logarithms and Exponents' },
          { name: 'Trigonometry' },
          { name: 'Statistics' },
          { name: 'Probability' },
        ],
      },
    ],
  },
  {
    name: 'Geometry',
    sections: [
      {
        name: 'Basic Concepts',
        topics: [
          { name: 'Points' },
          { name: 'Lines' },
          { name: 'Planes' },
          { name: 'Angles' },
          { name: 'Congruence' },
        ],
      },
      {
        name: 'Advanced Concepts',
        topics: [
          { name: 'Circles' },
          { name: 'Parallel Lines and Planes' },
          { name: 'Triangles' },
          { name: 'Trigonometry' },
          { name: 'Statistics' },
        ],
      },
    ],
  },
  {
    name: 'Trigonometry',
    sections: [
      {
        name: 'Basic Concepts',
        topics: [
          { name: 'Angles' },
          { name: 'Trigonometric Functions' },
          { name: 'Inverse Trigonometric Functions' },
          { name: 'Trigonometric Identities' },
        ],
      },
      {
        name: 'Advanced Concepts',
        topics: [
          { name: 'Trigonometric Equations' },
          { name: 'Vectors' },
          { name: 'Calculus' },
          { name: 'Differential Calculus' },
          { name: 'Integral Calculus' },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NgIconComponent, AccordionModule, DividerComponent],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
  viewProviders: [
    provideIcons({
      ionLibrary,
    }),
  ],
})
export class PreviewComponent implements OnInit {
  activeCourse!: ICourse;
  courses: ICourse[] = coursesData;

  ngOnInit(): void {
    this.activeCourse = this.courses[0];
  }

  isActiveCourse(course: ICourse): boolean {
    return this.activeCourse === course;
  }

  setActiveCourse(course: ICourse): void {
    this.activeCourse = course;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsService } from '../../cats/cats.service';
import { Cat } from '../../cats/cat';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  constructor(private catsService: CatsService) {}

  cats: Cat[] = [];

  remove(cat: Cat) {
    this.catsService.deleteCat(cat.cat_name);
  }

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe(cats => {
      this.cats = cats;
    });
  }
}

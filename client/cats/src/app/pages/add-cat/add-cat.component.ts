import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cat } from '../../cats/cat';
import { FormsModule } from '@angular/forms';
import { CatsService } from '../../cats/cats.service';

@Component({
  selector: 'app-add-cat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-cat.component.html',
  styleUrl: './add-cat.component.css'
})
export class AddCatComponent implements OnInit {
  cat: Cat = {id: '', cat_name: '', cat_age: 0, cat_breed: '' };

  constructor(private catsService: CatsService) {}

  onSubmit() {
    this.catsService.saveNewCat(this.cat);
    return window.alert('Gato cadastrado com sucesso!');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

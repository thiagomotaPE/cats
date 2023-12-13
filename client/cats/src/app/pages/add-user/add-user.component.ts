import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../users/user';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: User = {id: '', user_name: '', user_email: '', user_password: '' };

  constructor(private userService: UsersService) {}

  onSubmit() {
    this.userService.saveNewUser(this.user).subscribe(user => {
      console.log(user);
    });
    return window.alert('Funcionario cadastrado com sucesso!');
  }
}

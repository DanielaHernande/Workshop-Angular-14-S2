import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  addUser(newUser: any): void {
    this.userService.createUser(newUser).subscribe(response => {
      this.loadUsers();
    });
  }

  updateUser(userId: number, updatedUser: any): void {
    this.userService.updateUser(userId, updatedUser).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }
}

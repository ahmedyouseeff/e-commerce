import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [AddUserComponent, LoginComponent],
  imports: [CommonModule, SharedModule],
})
export class UsersModule {}

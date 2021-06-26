import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './pipes/search/search.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    UsersComponent,
    SearchPipe,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    UsersRoutingModule,
    MatCardModule
  ],
})
export class UsersModule { }

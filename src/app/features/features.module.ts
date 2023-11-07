import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserListComponent } from './users/user-list/user-list.component';



@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }

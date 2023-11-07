import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  // Add more route configurations here
  {
    path:'users',
    loadChildren: ()=> import('./features/users/users-routing.module').then((m)=>m.UserRoutingModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

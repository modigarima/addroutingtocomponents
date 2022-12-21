import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [ {

  path:'Task-add',
  component:TaskAddComponent
  },
  {
    path:'Task-list',
    component:TaskListComponent   // TaskListComponenet is the name of the componnet 
    },];


 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

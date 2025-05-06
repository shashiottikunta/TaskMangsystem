import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './theme/login/login.component';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { EmplpoyeeListComponent } from './theme/employees/emplpoyee-list/emplpoyee-list.component';
import { EmployeeAddComponent } from './theme/employees/employee-add/employee-add.component';
import { EmployeeViewComponent } from './theme/employees/employee-view/employee-view.component';
import { ProjectListComponent } from './theme/projects/project-list/project-list.component';
import { ProjectAddComponent } from './theme/projects/project-add/project-add.component';
import { ProjectViewComponent } from './theme/projects/project-view/project-view.component';
import { TasksListComponent } from './theme/tasks/tasks-list/tasks-list.component';
import { TaskAddComponent } from './theme/tasks/task-add/task-add.component';
import { TaskViewComponent } from './theme/tasks/task-view/task-view.component';
const routes: Routes = [{path:'login',component:LoginComponent}, 
{path:'layout',component:LayoutComponent},

{path:'',component:LayoutComponent,
children: [
  {path:'dashboard',component:DashboardComponent},
  {path:'employee-list',component:EmplpoyeeListComponent},
  {path:'employee-add',component:EmployeeAddComponent},
  {path:'employee-view',component:EmployeeViewComponent},
  {path:'project-list',component:ProjectListComponent},
  {path:'task-list',component:TasksListComponent},

]
},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

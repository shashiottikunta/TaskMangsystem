import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './theme/login/login.component';
import { HttpInterceptorService } from './core/interceptors/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import { HeaderComponent } from './theme/header/header.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EmplpoyeeListComponent } from './theme/employees/emplpoyee-list/emplpoyee-list.component';
import { EmployeeAddComponent } from './theme/employees/employee-add/employee-add.component';
import { EmployeeViewComponent } from './theme/employees/employee-view/employee-view.component';
import { ProjectListComponent } from './theme/projects/project-list/project-list.component';
import { ProjectAddComponent } from './theme/projects/project-add/project-add.component';
import { ProjectViewComponent } from './theme/projects/project-view/project-view.component';
import { TasksListComponent } from './theme/tasks/tasks-list/tasks-list.component';
import { TaskAddComponent } from './theme/tasks/task-add/task-add.component';
import { TaskViewComponent } from './theme/tasks/task-view/task-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    EmplpoyeeListComponent,
    EmployeeAddComponent,
    EmployeeViewComponent,
    ProjectListComponent,
    ProjectAddComponent,
    ProjectViewComponent,
    TasksListComponent,
    TaskAddComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    	preventDuplicates: true,
      maxOpened: 1
    }),

  ],
  providers: [ 
  //    {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HttpInterceptorService,
  //   multi: true
  // },
], 
 bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CategoryComponent } from './pages/category/category.component';

const appRoutes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'category', component: CategoryComponent },
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
   ],
  declarations: [ AppComponent, HelloComponent,DepartmentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

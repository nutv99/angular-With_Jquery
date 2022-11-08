import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Tabledata1Component } from './shared/components/tabledata1/tabledata1.component';
import { HelloComponent } from './hello.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CategoryComponent } from './pages/category/category.component';
import { GroupItemComponent } from './pages/groupitem/group-item.component';

import { Tabledata2Component } from './shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from './shared/components/searchselect/searchselect.component';
import { OutSelect } from './shared/components/outselect/outselect.component';
import { CallAPIDirective } from './shared/directives/call-api.directive'; 
import { APIService} from './_services/api.service' ;

import { CrudComponent } from './pages/crud/crud.component';


const appRoutes: Routes = [
  { path: 'crud/:pageid/:pageno', component: CrudComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/:id', component: DepartmentComponent },
  { path: 'department/edit/:id', component: DepartmentComponent },
  { path: 'category/1', component: CategoryComponent },
  { path: 'group/1', component: GroupItemComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only set true
    ),
  ],
  declarations: [
    AppComponent,
    Tabledata1Component,
    HelloComponent,
    DepartmentComponent,
    Tabledata2Component,
    SearchselectComponent,
    GroupItemComponent,
    OutSelect,
    CallAPIDirective,
    APIService,
    
    CrudComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

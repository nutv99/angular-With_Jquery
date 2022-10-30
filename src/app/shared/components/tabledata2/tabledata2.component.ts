import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { EmpService } from '../../../_services/emp.service';
import { HttpClient } from '@angular/common/http';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import { environment, apiPath } from '../../../environment';

import { Emp } from '../../../_models/emp';
import { first } from 'rxjs';

@Component({
  selector: 'app-tabledata2',
  templateUrl: './tabledata2.component.html',
  styleUrls: ['./tabledata2.component.css'],
})
export class Tabledata2Component implements OnInit {
  @Input() tableAPI: string;

  apiName: string = '';
  // employees!: Emp[];
  results: any;
  totalrow: number = 0;
  headerTable = ['ชื่อ', 'นามสกุล', 'อีเมล์', 'เบอร์โทร', ''];

  faEdit = faEdit;
  faDeleteLeft = faDeleteLeft;
  faChevronCircleRight = faChevronCircleRight;

  employees!: Emp[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiName = environment.apiHost + apiPath.departmentByPageNo;
    console.log('API URL ', this.apiName);
    this.http
      .get<any>(environment.apiHost + apiPath.departmentByPageNo)
      .subscribe((data) => {
        // อ่านค่า result จาก JSON response ที่ส่งออกมา
        console.table(data.resultData);
        this.results = data.resultData;
        console.table(data);
      });
  }

  // loadEmployee() {
  //   this.empService
  //     .getAll()
  //     .pipe(first())
  //     .subscribe((d) => {
  //       this.employees = d;
  //       this.totalrow = d.length;
  //     });
  // }

  // delete(emp: Emp) {
  //   this.empService
  //     .delete(emp.empId)
  //     .pipe(first())
  //     .subscribe(() => {
  //       this.loadEmployee();
  //     });
  // }
}

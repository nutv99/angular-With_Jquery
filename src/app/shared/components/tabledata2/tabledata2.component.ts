import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { EmpService } from '../../../_services/emp.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../../../environment';

import { Emp } from '../../../_models/emp';
import { first } from 'rxjs';

@Component({
  selector: 'app-tabledata2',
  templateUrl: './tabledata2.component.html',
  styleUrls: ['./tabledata2.component.css'],
})
export class Tabledata2Component implements OnInit {
  tableAPI: string; 
  @Input() varModelTable ;

  pageno : string = '1' ;

  apiName: string = '';
  myurl: string = '';
  AllRec : number = 0 ;
  // employees!: Emp[];
  results: any;
  totalrow: number = 0;
  headerTable = ['ชื่อ', 'นามสกุล', 'อีเมล์', 'เบอร์โทร', ''];
  
  Pagination = [2,3,4] ;
  faEdit = faEdit;
  faDeleteLeft = faDeleteLeft;
  faChevronCircleRight = faChevronCircleRight;

  employees!: Emp[];

  constructor(private http: HttpClient,private _Activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    //this.apiName = environment.apiHost + apiPath.departmentByPageNo;
    // console.log('API URL ', this.apiName);
    this.headerTable = this.varModelTable.headerTable ; 
    this.tableAPI = this.varModelTable.apiTable ;
    this.pageno=this._Activatedroute.snapshot.paramMap.get("id");
    this.fetchData(this.pageno) ;
  }

  fetchData(pageno) {
    this.myurl =
    'https://lovetoshopmall.com/swagger/marlinshopWork2/th/department/ByPageNo/'+ pageno;
  this.http.get<any>(this.myurl).subscribe((data) => {
    // อ่านค่า result จาก JSON response ที่ส่งออกมา
    console.table(data.data);
    this. AllRec  = data.totalRec ;
    this.results = data.data;
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

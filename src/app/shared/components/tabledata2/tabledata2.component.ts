import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { EmpService } from '../../../_services/emp.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../../../environment';

import { Emp } from '../../../_models/emp';
import { first } from 'rxjs';

// <i class="fa-sharp fa-solid fa-plus"></i>
@Component({
  selector: 'app-tabledata2',
  templateUrl: './tabledata2.component.html',
  styleUrls: ['./tabledata2.component.css'],
})
export class Tabledata2Component implements OnInit {
  @Output() MYIDOut: EventEmitter<any> = new EventEmitter();
  @Output() MYIDOutDelete: EventEmitter<any> = new EventEmitter();
  tableAPI: string;
  @Input() varModelTable;
  @Input() pageno999;

  pageid: string = '';
  pageno: string = '';

  apiName: string = '';
  myurl: string = '';
  AllRec: number = 0;
  // employees!: Emp[];
  results: any;
  totalrow: number = 0;
  headerTable = ['ชื่อ', 'นามสกุล', 'อีเมล์', 'เบอร์โทร', ''];

  Pagination = [2, 3, 4];
  faEdit = faEdit;
  faDeleteLeft = faDeleteLeft;
  faChevronCircleRight = faChevronCircleRight;

  employees!: Emp[];

  constructor(
    private http: HttpClient,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.apiName = environment.apiHost + apiPath.departmentByPageNo;
    console.log('API URL ', this.varModelTable.apiTable);
    this.headerTable = this.varModelTable.headerColTable;
    // this.headerTable = this.varModelTable.headerTable;
    this.tableAPI = this.varModelTable.apiTable;
    if (this._Activatedroute.snapshot.paramMap.get('pageid')) {
      this.pageno = this._Activatedroute.snapshot.paramMap.get('pageno');
    } else {
      this.pageno = this._Activatedroute.snapshot.paramMap.get('pageno');
    }
    this.fetchData(this.pageno);
  }

  fetchData(pageno) {
    this.results = '';
    //pageno = this.varModelTable.pageno;
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2/th/' +
      this.varModelTable.apiTable +
      '/ByPageNo/' +
      pageno;
    //console.log('URL', this.myurl);
    //alert(this.myurl);
    this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table(data.data);
      this.results = data.data;
      this.headerTable = data.HeadCol;
      this.AllRec = data.totalRec;
    });
  }

  setIDOut(id: number) {
    let aa = id;
    this.MYIDOut.emit(aa);
  }

  setIDOutDelete(id: number) {
    let aa = id;
    this.MYIDOutDelete.emit(aa);
  }

  // confirmDelete() {
  //   alert('Delete ?');
  // }

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

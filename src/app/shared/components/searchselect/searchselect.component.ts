import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment';

@Component({
  selector: 'app-searchselect',
  templateUrl: './searchselect.component.html',
  styleUrls: ['./searchselect.component.css'],
})

/*
@Input Model 
  apiPath : string ,
  apiPathChild : string ,

*/



export class SearchselectComponent implements OnInit {
  @ViewChild('myNameElem') myNameElem: ElementRef;
  @Input() apiPath: string;
  //

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   }),
  //   responseType: 'text' as 'json',
  // };

  baseUrl :string = '' ;
  results: any;
  myurl: string = '';
  tableAPI: string = 'Department';
  pageno = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.baseUrl = environment.apiHost + this.apiPath;   
    this.fetchData2();
  }

  //th/department/All/1
  fetchData2() {
    this.results = '';
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2' + this.apiPath;
    console.log('aa', this.myurl);
    this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Select List', data) ;
      //this.AllRec = data.totalRec;
      this.results = data;
    });
  }

  fetchDat3() {
    this.results = '';
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2' + this.apiPath;
    console.log('aa', this.myurl);
    this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Select List', data);
      //this.AllRec = data.totalRec;
      this.results = data;
    });
  }

  onChange(e: any) {
    alert(e.target.value);
  }
}

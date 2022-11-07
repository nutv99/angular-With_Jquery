import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-out-select',
  templateUrl: './outselect.component.html',
  styleUrls: ['./outselect.component.css'],
})
export class OutSelect implements OnInit {
  @Input() apiPathInput: string;
  @Input() ModelName: string;
  @Input() dataInit: any;
  @Input() Title: string;

  @Output() myListChange: EventEmitter<string> = new EventEmitter();
  sData: any = [{}];
  @Input() results: any = [{ ID: '2', departmentDesc: 'CCCCCCC' }];
  myurl: string = '';
  apiPath = '/th/department/All/1';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.dataInit === '') {
      this.InitDataSelect();
    } else {
      this.results = this.dataInit;
    }
  }

  async InitDataSelect() {
    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2/' + this.apiPathInput;

    await this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Select List', data);
      this.dataInit = data;
      this.results = this.dataInit;
      this.myListChange.emit(this.sData);
      //this.AllRec = data.totalRec;
      // this.results = data;
    });
  }

  async setOutData(sParentID) {
    //this.results = '';
    // this.myurl =
    //   'https://lovetoshopmall.com/swagger/marlinshopWork2/' + this.apiPathInput;

    this.myurl =
      'https://lovetoshopmall.com/swagger/marlinshopWork2/th/' +
      this.ModelName +
      '/WithChild/' +
      sParentID.target.value;
    // alert(this.myurl);

    await this.http.get<any>(this.myurl).subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      console.table('Data For Select List OutData', data);
      this.sData = data;
      this.myListChange.emit(this.sData);
      //this.AllRec = data.totalRec;
      // this.results = data;
    });
  }
}

/*
How To Use 

ที่ไฟล์ Parent เรียกใช้
<app-out-select 
 [apiPathInput]="'th/department/All/1'"  
 (myListChange)="BShowNumBerChange($event)"
></app-out-select>
// myListChange คือ OutputEmitter ที่จะ พ่่นค่า (Inject) ออกไปให้ Parent

ที่ไฟล์ Parent สร้าง function เพื่อรับค่า จาก emit
ในที่นี้คือ 
BShowNumBerChange($event) 
// Function ที่ฝั่ง Parent
 BShowNumBerChange(e: any) {
    //alert(e);
    console.log('On App Component  99999', JSON.stringify(e));
    this.orderno = e;
  }

*/

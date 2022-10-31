import { Component, OnInit } from '@angular/core';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';

declare var window: any;
export interface modelTable {
  apiTable: string;
  headerTable: string[];
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  formModal: any;
  varmodelTable: modelTable = {
    apiTable: 'department',
    headerTable: ['รหัสแผนก', 'ชื่อแผนก', 'รหัส-2', 'รูป'],
  };
  constructor() {}

  ngOnInit() {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );
  }

  // openFormModal() {
  //   this.formModal.show();
  // }
  // saveSomeThing() {
  //   // confirm or save something
  //   this.formModal.hide();
  // }
}

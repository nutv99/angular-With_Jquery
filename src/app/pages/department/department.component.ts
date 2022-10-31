import { Component, OnInit } from '@angular/core';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';

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
  
  varmodelTable: modelTable = {
    apiTable: 'department',
    headerTable: ['รหัสแผนก', 'ชื่อแผนก', 'รหัส-2', 'รูป'],
  };
  constructor() {}

  ngOnInit() {}
}

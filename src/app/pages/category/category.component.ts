import { Component, OnInit } from '@angular/core';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

declare var window: any;
export interface modelTable {
  apiTable: string;
  headerTable: string[];
}

@Component(
  {
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

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

}
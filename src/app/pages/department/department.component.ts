import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

import { DepartmentModel } from '../../_models/department';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var window: any;
export interface modelTable {
  apiTable: string;
  Caption: string;
  headerColTable: string[];
  ParentTableList: string[];
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
    Caption: 'แผนกสินค้า',
    headerColTable: ['รหัสแผนก', 'ชื่อแผนก', 'รหัส-2', 'รูป'],
    ParentTableList: [],
  };
// Initial Form Model VAR & Value
  departmentModel: DepartmentModel = {
    id: 2,
    departmentCode: 'A1',
    departmentDesc: 'แผนก....',
    lang: 'th',
    ImageName: '',
  };

  stageCrud: boolean = true;
  stageForm: boolean = false;
  myForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(this.departmentModel);
  }

  ngOnInit() {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );
  }
  setStageForm() {
    this.stageForm = true;
    this.stageCrud = false;
  }

  saveDepartment() {

  }

  searchDepartment() {

  }
  

  // openFormModal() {
  //   this.formModal.show();
  // }
  // saveSomeThing() {
  //   // confirm or save something
  //   this.formModal.hide();
  // }
}

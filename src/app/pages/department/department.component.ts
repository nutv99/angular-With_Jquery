import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

import { DepartmentModel } from '../../_models/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { APIService } from '../../_services/api.service';

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

  id: number = 1;
  ModelName: string = 'department';

  stageCrud: boolean = true;
  stageForm: boolean = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: APIService) {}

  ngOnInit() {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );

    // this.myForm = this.fb.group({
    //   id: ['', Validators.required],
    //   departmentCode: ['', Validators.required],
    //   departmentDesc: ['', Validators.required],
    //   lang: ['th', Validators.required],
    //   ImageName: '',
    // });
    this.myForm = this.fb.group({
      departmentDesc: ['', Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }
  setStageForm() {
    this.stageForm = true;
    this.stageCrud = false;
  }

  onSubmit() {
    //this.registerForm.valid
    if (this.myForm.invalid) {
      alert('Cannot Submit');
      return;
    }
    //this.apiService.create(payload)
  }

  getByID() {
    this.apiService
      .getById(this.ModelName, this.id)
      .subscribe((response: any) => {
        this.departmentModel = response;
      });
  }

  saveDepartment() {}

  searchDepartment() {}

  // openFormModal() {
  //   this.formModal.show();
  // }
  // saveSomeThing() {
  //   // confirm or save something
  //   this.formModal.hide();
  // }
}

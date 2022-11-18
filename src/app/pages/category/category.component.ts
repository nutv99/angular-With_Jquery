import { Component, OnInit } from '@angular/core';

import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

import { full_categoryModel } from '../../_models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { APIService } from '../../_services/api.service';

import Swal from 'sweetalert2';

import { TYPE } from '../../shared/values.constants';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

declare var window: any;
export interface modelTable {
  apiTable: string;
  Caption: string;
  pageno: number;
  headerColTable: string[];
  ParentTableList: string[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  formModal: any;
  varmodelTable: modelTable = {
    apiTable: 'category',
    Caption: 'หมวดสินค้า',
    pageno: 1,
    headerColTable: ['', '', '', ''],
    ParentTableList: [],
  };
  // Initial Form Model VAR & Value
  categoryModel: full_categoryModel;

  id: number = 1;
  ModelName: string = 'category';
  FormMode: string = 'post';
  formTitle: string = 'เพิ่มข้อมูล-หมวดสินค้า ';

  stageCrud: boolean = true;
  stageForm: boolean = false;
  myForm99: FormGroup;

  constructor(private fb: FormBuilder, private apiService: APIService) {}

  ngOnInit() {
    this.myForm99 = this.fb.group({
      lang: [''],
      categoryDesc: [''],
      imageName: [''],
    });
  }

  get f() {
    return this.myForm99.controls;
  }

  setStageForm() {
    if (this.stageForm === false) {
      this.stageForm = true;
      this.stageCrud = false;
    } else {
      this.stageForm = false;
      this.stageCrud = true;
    }
  }

  onSubmit() {
    //this.registerForm.valid
    if (this.myForm99.invalid) {
      alert('Cannot Submit');
      return;
    }

    if (this.FormMode === 'post') {
      let PayLoad = {
        dataPayload: this.myForm99.value,
      };
      this.apiService
        .create(this.ModelName, PayLoad)
        .subscribe((response: any) => {});
    }

    if (this.FormMode === 'patch') {
      let PayLoad = {
        dataPayload: this.myForm99.value,
      };
      // alert('Update')
      this.apiService
        .update999(this.ModelName, PayLoad)
        .subscribe((response: any) => {
          // alert('Success Update');
        });
    }
    //this.apiService.create(payload)
  }

  closeForm() {
    this.stageForm = false;
    this.stageCrud = true;
  }
}

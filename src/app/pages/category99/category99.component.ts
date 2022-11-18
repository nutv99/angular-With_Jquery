import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

import { full_categoryModel } from '../../_models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { APIService } from '../../_services/api.service';
import { ActivatedRoute } from '@angular/router';

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
  headerColTable: string[];
  ParentTableList: string[];
}

@Component({
  selector: 'app-category99',
  templateUrl: './category99.component.html',
  styleUrls: ['./category99.component.css'],
})
export class category99Component implements OnInit {
  formModal: any;
  varmodelTable: modelTable = {
    apiTable: 'category99',
    Caption: 'แผนกสินค้า',
    headerColTable: ['', '', '', ''],
    ParentTableList: [],
  };
  // Initial Form Model VAR & Value
  category99Model: full_categoryModel = {
    id: 2,
    categorycode: 'A1',
    categoryDesc: 'แผนก....',
    lang: 'th',
    imageName: '',
  };

  id: number = 1;
  ModelName: string = 'category99';
  FormMode: string = 'post';
  formTitle: string = 'เพิ่มข้อมูล ';

  stageCrud: boolean = false;
  stageForm: boolean = true;
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: APIService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    /*this.categoryForm = this.fb.group({
      id: [''],
      category99Code: [''],
      category99Desc: [''],
      lang: [''],
      imageName: [''],
    });
	*/

    this.categoryForm = this.fb.group({
      id: ['', Validators.required],
      shopID: [''],
    });
    if (this._Activatedroute.snapshot.paramMap.get('id')) {
      //alert(this._Activatedroute.snapshot.paramMap.get('id'));
      let id = this._Activatedroute.snapshot.paramMap.get('id');
      this.categoryForm.get('id').setValue(id);
      if (id != 'new') {
        this.formTitle = 'แก้ไขข้อมูล';
        this.getByID(id);
      } else {
        this.formTitle = 'เพิ่มข้อมูล';
      }
    }
  }

  get f() {
    return this.categoryForm.controls;
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
    if (this.categoryForm.invalid) {
      alert('Cannot Submit');
      return;
    }

    if (this.FormMode === 'post') {
      let PayLoad = {
        dataPayload: this.categoryForm.value,
      };
      this.apiService
        .create(this.ModelName, PayLoad)
        .subscribe((response: any) => {
          this.alertWithSuccess();
        });
    }

    if (this.FormMode === 'patch') {
      let PayLoad = {
        dataPayload: this.categoryForm.value,
      };
      // alert('Update')
      this.apiService
        .update999(this.ModelName, PayLoad)
        .subscribe((response: any) => {
          // alert('Success Update');
          this.alertWithSuccess();
        });
    }
    //this.apiService.create(payload)
  }

  closeForm() {
    this.stageForm = false;
    this.stageCrud = true;
  }

  newForm() {
    console.clear();
    this.categoryForm.get('id').setValue('');
    this.categoryForm.get('shopID').setValue('');
  }

  getByID(id) {
    console.clear();
    this.apiService.getById(this.ModelName, id).subscribe((response: any) => {
      //this.category99Model = response;
      console.log('res', response);

      this.categoryForm.get('id').setValue(response.id);
      this.categoryForm.get('shopID').setValue(response.shopID);

      //this.categoryForm.get('Mode').setValue('patch');
    });
  }

  setIDOnForm(e: any) {
    console.log('On Form ' + e);
    alert('sss');
    this.categoryForm.get('id').setValue(e);
    this.FormMode = 'patch';
    this.getByID(e);
    this.setStageForm();
  }

  OnDeletecategory99(e: any) {
    alert('e.target.value');
    // alert(e);
    // let id = e;
    // this.apiService.delete999(this.ModelName, id).subscribe((response: any) => {
    //   this.categoryForm.setValue(response);
    // });
    // //alert('Delete ?' + e);
    // //this.confirmBox();
    // //return;
    // this.categoryForm.get('id').setValue(e);
    // this.FormMode = 'delete';
    // this.getByID(e);
  }

  savecategory99() {}

  searchcategory99() {}

  confirmBox() {
    Swal.fire({
      title: 'ท่านต้องการ ลบข้อมูลนี้ ?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  // openFormModal() {
  //   this.formModal.show();
  // }
  // saveSomeThing() {
  //   // confirm or save something
  //   this.formModal.hide();
  // }
}

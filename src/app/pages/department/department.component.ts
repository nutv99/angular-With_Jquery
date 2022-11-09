import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabledata2Component } from '../../shared/components/tabledata2/tabledata2.component';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

import { DepartmentModel } from '../../_models/department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { APIService } from '../../_services/api.service';

//import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  FormMode: string = 'post';
  formTitle: string = 'เพิ่มข้อมูล ';

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
      id: [''],
      departmentCode: [''],
      departmentDesc: [''],
      lang: [''],
      imageName: [''],
    });
  }

  get f() {
    return this.myForm.controls;
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
    if (this.myForm.invalid) {
      alert('Cannot Submit');
      return;
    }
   

    console.log('Form Data', this.myForm.value);
    console.log('Form Mode', this.FormMode);
    if (this.FormMode === 'post') {
      // let PayLoad = {
      //   dataPayload : this.myForm.value
      // }
      let PayLoad = {
        dataPayload : this.myForm.value
      }
      this.apiService
        .create(this.ModelName, PayLoad)
        .subscribe((response: any) => {
          this.myForm.setValue(response);
        });
    } else {

      let PayLoad = {
        dataPayload : this.myForm.value
      }
      this.apiService
        .update(this.ModelName, PayLoad)
        .subscribe((response: any) => {
          //this.myForm.setValue(response);
        });
    }
    //this.apiService.create(payload)
  }

  closeForm() {
    this.stageForm = false;
    this.stageCrud = true;
  }

  getByID(id) {
    console.clear();
    this.apiService.getById(this.ModelName, id).subscribe((response: any) => {
      // this.departmentModel = response;
      //console.log('res',response[0].departmentDesc) ;
      //this.myForm.get('departmentDesc').setValue(response[0].departmentDesc);
      this.myForm.setValue(response);

      //this.myForm.get('Mode').setValue('patch');
    });
  }

  setIDOnForm(e: any) {
    console.log('On Form ' + e);
    this.myForm.get('id').setValue(e);
    this.FormMode = 'patch';
    this.getByID(e);
    this.setStageForm();
  }

  OnDelete(e: any) {
    console.log('On Form ' + e); 
    let id = e ;
    
    this.apiService
    .delete(this.ModelName, id)
    .subscribe((response: any) => {
      this.myForm.setValue(response);
    });
    //alert('Delete ?' + e);
    //this.confirmBox();
    //return;
    this.myForm.get('id').setValue(e);
    this.FormMode = 'delete';
    this.getByID(e);
  }

  saveDepartment() {}

  searchDepartment() {}

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

  // openFormModal() {
  //   this.formModal.show();
  // }
  // saveSomeThing() {
  //   // confirm or save something
  //   this.formModal.hide();
  // }
}

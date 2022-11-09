import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';


@Injectable()
export class SwalService {

  constructor() { }

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

  alertWithSuccess(){
    Swal.fire('Thank you...', 'บันทึกข้อมูล สำเร็จ!', 'success')
  } 

  swalMsg(response:any) {

    if (response.status=== 'success') {
       this.alertWithSuccess() ;
    }

  }

  simpleAlert(){
    Swal.fire('Hello world!');
  }

}
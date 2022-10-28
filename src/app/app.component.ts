import { Component, VERSION, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isJqueryWorking: string;

  ngOnInit() {
    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working 9999!!!';
      // $('#testdiv').html('sssss');
    });
  }

  addClass() {
    //$('#testdiv').html('99999');
    // if (!$("#testdiv").hasClass('myBorder')) {
    //   $("#testdiv").addClass('myBorder')
    // } else {
    //   $("#testdiv").removeClass('myBorder').addClass('myBorder2')
    // }
    $('#testdiv').toggleClass('collapsed');

    // document.querySelector('button').addEventListener('click', () => { document.querySelector('.collapsible').classList.toggle('collapsed');});
  }

  HideMenu(id: string) {
    $('#' + id).toggleClass('scale-up-ver-top');
    // document.querySelector('.ulmenu').toggleClass('collapsedHeight');
  }
}

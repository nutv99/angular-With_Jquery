import { Component, VERSION, OnInit } from '@angular/core';
import $ from 'jquery';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//<i class="fa-solid fa-chevrons-right"></i>

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isJqueryWorking: string;
  filmIcon = faFilm;
  faChevronCircleRight = faChevronCircleRight;
  faHamburger = faBars;

  ngOnInit() {
    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working 9999!!!';
      // $('#testdiv').html('sssss');
    });
  }

  ToggleSideBar() {
    //$('#testdiv').html('99999');
    // if (!$("#testdiv").hasClass('myBorder')) {
    //   $("#testdiv").addClass('myBorder')
    // } else {
    //   $("#testdiv").removeClass('myBorder').addClass('myBorder2')
    // }
    //$('#testdiv').toggleClass('collapsed') ;
    //$('#testdiv').toggleClass('collapsed');
    $('#sidemenu').toggleClass('nodisplay');
    $('#workarea').toggleClass('col-sm-12');
    //workarea

    // document.querySelector('button').addEventListener('click', () => { document.querySelector('.collapsible').classList.toggle('collapsed');});
  }

  HideMenu(id: string) {
    $('#' + id).animate(
      {
        height: 'toggle',
      },
      500,
      function () {
        // Animation complete.
      }
    );
  }
}

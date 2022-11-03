import { Component, OnInit } from '@angular/core';
import { SearchselectComponent } from '../../shared/components/searchselect/searchselect.component';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css'],
})
export class GroupItemComponent implements OnInit {
  myOutput: any = {};
  constructor() {}

  ngOnInit() {}

  setChildData(e: any) {
    alert(e.target.value);
    console.log('on groupitem', e);
  }
}

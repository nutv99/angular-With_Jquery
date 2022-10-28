import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledata2',
  templateUrl: './tabledata2.component.html',
  styleUrls: ['./tabledata2.component.css'],
})
export class Tabledata2Component implements OnInit {
  // employees!: Emp[];
  totalrow: number = 0;
  headerTable = ['ชื่อ', 'นามสกุล', 'อีเมล์', 'เบอร์โทร', ''];

  constructor() {}

  ngOnInit() {}
}

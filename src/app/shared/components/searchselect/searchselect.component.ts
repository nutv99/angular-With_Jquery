import { Component, OnInit,ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-searchselect',
  templateUrl: './searchselect.component.html',
  styleUrls: ['./searchselect.component.css']
})
export class SearchselectComponent implements OnInit {
  @ViewChild("myNameElem") myNameElem: ElementRef; 
  constructor() { }

  ngOnInit() {
  }

}
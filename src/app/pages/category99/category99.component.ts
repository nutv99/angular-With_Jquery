import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category99',
  templateUrl: './category99.component.html',
  styleUrls: ['./category99.component.css'],
})
export class category99Component implements OnInit {
  staffForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.staffForm = this.fb.group({
      id: [''],
      shopID: [''],
    });
  }
}

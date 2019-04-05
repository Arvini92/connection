import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Tag {
  name: string;
}
export interface Method {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-middle-form',
  templateUrl: './middle-form.component.html',
  styleUrls: ['./middle-form.component.css']
})
export class MiddleFormComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [{ name: 'list' }, { name: 'user' }];

  methods: Method[] = [
    { value: 'post', viewValue: 'Post' },
    { value: 'put', viewValue: 'Put' },
    { value: 'get', viewValue: 'Get' },
    { value: 'delete', viewValue: 'Delete' }
  ];

  selected = this.methods[0].value;
  path = '/list';
  description = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Aenean nec imperdiet nunc.
  Mauris a sapien quam.
  Nulla egestas faucibus leo in suscipit.`;
  constructor() {}

  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}

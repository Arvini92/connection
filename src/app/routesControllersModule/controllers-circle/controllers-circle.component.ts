import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

export interface Middleware {
  name: string;
}
@Component({
  selector: 'app-controllers-circle',
  templateUrl: './controllers-circle.component.html',
  styleUrls: ['./controllers-circle.component.css']
})
export class ControllersCircleComponent implements OnInit {
  @Input() middlewares: Middleware[] = [
    { name: 'cache' },
    { name: 'init' },
    { name: 'info' },
    { name: 'cache' },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  @Output() onDeleteClick(): void {
    const dialogRef = this.dialog.open(DialogComponent, { width: '380px', height: '240px' });
  }
  @Output() onEditClick() {
    console.log('Edit');
  }
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('iconBox') iconBox: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(elRef): void {
    elRef.classList.add('success');
    setTimeout(() => { 
      this.dialogRef.close();
    }, 1000);
  }
}

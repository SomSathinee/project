import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { AuthService } from '../../../../shared/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edit: string;
}
export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', edit: '' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', edit: '' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', edit: '' },

];


@Component({
  selector: 'app-res-info',
  templateUrl: './res-info.component.html',
  styleUrls: ['./res-info.component.css']
})
export class ResInfoComponent {
  displayedColumns: string[] = ['position', 'weight', 'name', 'symbol', 'edit'];
  dataSource = ELEMENT_DATA;
  animal: string;
  name: string;
  about: string = "ร้านครัวลุงหิน อยู่ละแวกหลังมหาวิทยาลัยเทคโนโลยีสุรนารี ทางประตู 3ขับเรียบทางออกมาเรื่อยๆร้านจะอยู่ขวามือเป็นธุรกิจแบบครอบครัวที่ทำกันมานานแล้วมีคนในครอบครัวช่วยๆกันทำกับข้าว"
  constructor(public dialog: MatDialog) { }


  aboutdialog(): void {
    const dialogRef = this.dialog.open(Aboutdialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  contactdialog(): void {
    const dialogRef = this.dialog.open(Contactdialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  paymentdialog(): void {
    const dialogRef = this.dialog.open(Paymentdialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}



@Component({
  selector: 'aboutdialog',
  templateUrl: './dialog/aboutdialog.html',
  styleUrls: ['./res-info.component.css']
})
export class Aboutdialog {
  about = "ร้านครัวลุงหิน อยู่ละแวกหลังมหาวิทยาลัยเทคโนโลยีสุรนารี ทางประตู 3ขับเรียบทางออกมาเรื่อยๆร้านจะอยู่ขวามือเป็นธุรกิจแบบครอบครัวที่ทำกันมานานแล้วมีคนในครอบครัวช่วยๆกันทำกับข้าว"
  constructor(
    public dialogRef: MatDialogRef<Aboutdialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'contactdialog',
  templateUrl: './dialog/contactdialog.html',
  styleUrls: ['./res-info.component.css']
})
export class Contactdialog {
  
  constructor(public dialogRef: MatDialogRef<Contactdialog>,
   
   ) { }

  
}
@Component({
  selector: 'paymentdialog',
  templateUrl: './dialog/paymentdialog.html',
  styleUrls: ['./res-info.component.css']
})
export class Paymentdialog {
  
  constructor(public dialogRef: MatDialogRef<Paymentdialog>,
    
   ) { }
  
  
}
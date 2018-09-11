import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { AuthService } from '../../../../shared/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatSnackBar} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  orders$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  orders1: Observable<any[]>;
  buttoncomfrim: boolean;
  buttonfinish: boolean;
  restaurantID$: BehaviorSubject<string | null>;
  constructor(db: AngularFireDatabase, authService: AuthService, public dialog: MatDialog) {
    this.orders1 = db.list('/order', ref => ref.orderByChild("restaurantID").equalTo("res-test1")).valueChanges()
    this.buttonfinish = false;
    this.buttoncomfrim = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPayment);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showbuttonfinish() {
    this.buttonfinish = true;
    this.buttoncomfrim = false;

  }
  /** Whether the number of selected elements matches the total number of rows. */

}

export interface Transaction {
  name: string;
  position: number;
  amount: number;
  cost: number;

}


@Component({
  selector: 'dialogPayment',
  templateUrl: './dialogPayment.html',
  styleUrls: ['./payment.component.css']
})
export class DialogPayment {
 
  prompay : boolean;
  cash:boolean;
  buttoncomfrim: boolean;
  buttonfinish: boolean;
  displayedColumns: string[] = [ 'position', 'name', 'amount','cost'];
  checked = false;

  change:number;

  transactions: Transaction[] = [
    { position: 1, name: 'ผัดกระเพราหมู', amount: 1,cost:50 },
    { position: 2, name: 'ไข่ต้ม', amount: 4 ,cost:35},
    { position: 3, name: 'น้ำมันพืช', amount: 6 ,cost:40},
  
  ];
  constructor(db: AngularFireDatabase, authService: AuthService, public dialog: MatDialog,public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogPayment>) {
    this.cash=false;
    this.prompay=false;
    this.buttonfinish = false;
    this.buttoncomfrim = true;
  }
 

  openDialog() {
    const dialogRef = this.dialog.open(DialogPayment);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showbuttonfinish() {
    this.buttonfinish = true;
    this.buttoncomfrim = false;

  }
  showCash(){
    this.cash=true;
  }
  
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalAmount() {
   
  }
  showprompay(){
    this.cash=false;
    this.prompay=true;
  }
  openSnackBar(message: string, action: string) {
    message="ชำระเงินเสร็จสิ้น"
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
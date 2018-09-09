import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { AuthService } from '../../../../shared/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'ผัดกระเพราหมู', weight: 1 },
  { position: 2, name: 'ไข่ต้ม', weight: 4 },
  { position: 3, name: 'น้ำมันพืช', weight: 6 },

];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

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
    const dialogRef = this.dialog.open(DialogOrder);

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


@Component({
  selector: 'dialogOrder',
  templateUrl: './dialogOrder.html',
  styleUrls: ['./order.component.css']
})
export class DialogOrder {

  buttoncomfrim: boolean;
  buttonfinish: boolean;
  displayedColumns: string[] = ['select', 'position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  constructor(db: AngularFireDatabase, authService: AuthService, public dialog: MatDialog) {

    this.buttonfinish = false;
    this.buttoncomfrim = true;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogOrder);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showbuttonfinish() {
    this.buttonfinish = true;
    this.buttoncomfrim = false;

  }
}
import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent  {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  animal: string;
  name: string;

  constructor( public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(Fooddialog, {
     
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  
];


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'fooddialog',
  templateUrl: './fooddialog.html',
})
export class Fooddialog {
  have:boolean;
  nothave :boolean;
  constructor(
    public dialogRef: MatDialogRef<Fooddialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {


      this.have = false;
      this.nothave = false;
    }
    myControl = new FormControl();
    options: string[] = ['ต้ม', 'ผัด', 'แกง'];
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  openInput(){
    this.have = true;
 
  }
  closeInput(){
    this.have = false;
  }
}


import { Component, OnInit, Inject,Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  public about:string =  "ร้านครัวลุงหิน อยู่ละแวกหลังมหาวิทยาลัยเทคโนโลยีสุรนารี ทางประตู 3ขับเรียบทางออกมาเรื่อยๆร้านจะอยู่ขวามือเป็นธุรกิจแบบครอบครัวที่ทำกันมานานแล้วมีคนในครอบครัวช่วยๆกันทำกับข้าว" 
  constructor(public dialog: MatDialog) { }


  aboutdialog(): void {
    const dialogRef = this.dialog.open(Aboutdialog, {

      data: { name: this.name, animal: this.animal }
    });

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

    @Input() about:string;
  constructor(
    public dialogRef: MatDialogRef<Aboutdialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }




}

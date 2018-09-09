import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
export interface PeriodicElement {
  name: string;
  position: number;
  status: string;

  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ผัดกระเพราหมู', status:'มี'},
  {position: 2, name: 'ไข่ต้ม', status:'มี'},



  {position: 2, name: 'ไข่ต้ม', status:'มี'},
  {position: 3, name: 'น้ำมันพืช', status:'มี'},

];

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor() { }

  ngOnInit() {
  }
  /** Whether the number of selected elements matches the total number of rows. */
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
}

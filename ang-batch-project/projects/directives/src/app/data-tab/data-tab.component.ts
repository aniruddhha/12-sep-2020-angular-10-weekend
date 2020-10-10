import { TabData } from './domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  quotations: Array<TabData> = new Array()

  constructor() { }

  ngOnInit(): void {
    this.quotations.push({ item: 'Pen', qty: 1000, unitPrice: 250, tax: 12, total: 0 })
    this.quotations.push({ item: 'Pencil', qty: 850, unitPrice: 102, tax: 10, total: 0 })
    this.quotations.push({ item: 'Eraser', qty: 3268, unitPrice: 10, tax: 12, total: 0 })
    this.quotations.push({ item: 'Sharpner', qty: 5000, unitPrice: 5, tax: 6, total: 0 })
    this.quotations.push({ item: 'NoteBook', qty: 6893, unitPrice: 150, tax: 13, total: 0 })

  }
}

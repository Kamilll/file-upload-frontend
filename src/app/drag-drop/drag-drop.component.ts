import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.sass']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  upload(e) {
    const fileListAsArray = Array.from(e);
    console.log('Request has been made!');
 
  }

}

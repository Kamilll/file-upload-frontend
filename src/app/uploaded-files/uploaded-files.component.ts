import { Component, OnInit } from '@angular/core';
import { File } from '../file'

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.sass']
})
export class UploadedFilesComponent implements OnInit {

  files: File[] = [
    { name: "Photo.xml", downloadUri: "http://localhost:4200", lastModified: "2013-12-31 12:30" },
    { name: "Yellow.jpg", downloadUri: "http://localhost:4200", lastModified: "2013-12-31 12:30" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

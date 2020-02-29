import { EventEmitter, Directive, HostListener, Output, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDragDropUpload]'
})
export class DragDropUploadDirective {

  @Output() fileDropped = new EventEmitter<FileList>();

  @HostBinding('style.background-color') private background = '#ffffff'

  @HostListener('dragover', ['$event']) dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#e2eefd';
  }

  @HostListener('dragleave', ['$event']) 
  public dragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#716238'
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent) {
    this.background = '#ffffff';
    event.preventDefault();
    event.stopPropagation();
    console.log("directive")
    if (event.dataTransfer.files.length > 0) {
      this.fileDropped.emit(event.dataTransfer.files)
    }
  }

}

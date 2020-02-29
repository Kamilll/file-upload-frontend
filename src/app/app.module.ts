import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { UploadedFilesComponent } from './uploaded-files/uploaded-files.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropUploadDirective } from './drag-drop-upload.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadedFilesComponent,
    DragDropComponent,
    DragDropUploadDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

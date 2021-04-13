import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaTypes } from 'src/app/models/role';

@Component({
  selector: 'app-media-preview',
  templateUrl: './media-preview.component.html',
  styleUrls: ['./media-preview.component.css']
})
export class MediaPreviewComponent implements OnInit {
  mediaSrc = null;
  mimeType = null;
  MediaTypes=MediaTypes;
  constructor(
    public dialogRef: MatDialogRef<MediaPreviewComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) {
    if (data && data.mediaSrc) {
      this.mediaSrc = data.mediaSrc;
      this.mimeType = data.mimeType || MediaTypes.image;
    } else {
      this.closeDialog();
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: true });
  }
  
  ngOnInit(): void {
  }

}

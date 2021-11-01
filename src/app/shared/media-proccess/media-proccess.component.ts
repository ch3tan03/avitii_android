import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

/*import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';*/
import { ImageCropperResult, ImageCropperSetting, CropperComponent } from 'angular-cropperjs';
import Cropper from "cropperjs";
const uploadAPI = environment.apiUrl + '/api/post/upload/assetdata';

const uploadAccessUrl = environment.apiUrl + '/';

@Component({
    selector: 'app-media-proccess',
    templateUrl: './media-proccess.component.html',
    styleUrls: ['./media-proccess.component.css']
})
export class MediaProccessComponent implements OnInit {
    fileData: File = null;
    fileDataTemp: any = null;
    previewUrl: any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    uploadedFileObj: any = {};
    documentId: string = null;
    attributeKey: string = null;
    subFolderName: string = null;
    element_ctrlUpload: HTMLElement;
    isImageLoaded: boolean = false;
    imageUrl: string = null; //'https://fengyuanchen.github.io/cropperjs/images/picture.jpg';

    @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;
    element_img_imageCropper: HTMLImageElement;

    @ViewChild('angularCropper') public angularCropper: CropperComponent;
    config = {
        aspectRatio: 0,
        dragMode: 'crop',
        background: true,
        movable: true,
        rotatable: true,
        scalable: false,
        zoomable: false,
        viewMode: 1,
        checkImageOrigin: true,
        /*cropmove: this.cropMoved.bind(this),*/
        crop: this.fnCrop.bind(this),
        checkCrossOrigin: true
    };

    showBlockingMessageMediatorT: boolean = false;
    isAdminUserT: boolean = false;
    constructor(
        public dialogRef: MatDialogRef<MediaProccessComponent>,
        private alertService: AlertService,
        private http: HttpClient,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.imageDestination = "";
        if (data) {
            this.documentId = data.documentId;
            this.attributeKey = data.attributeKey;
            this.subFolderName = data.subFolderName;
            this.isAdminUserT = !!data.isAdminUserT;
            switch (this.attributeKey) {
                case 'selfProfileUrl':
                    this.showBlockingMessageMediatorT = false;
                    break;
                case 'myPassportMedia':
                case 'myPassportMediaSelfVerify':
                case 'myDLMedia':
                case 'myDLMediaSelfVerify':
                case 'myHICardMedia':
                case 'myHICardMediaSelfVerify':
                case 'myRKIMedia':
                case 'myRKIMediaSelfVerify':
                    if (!this.isAdminUserT) {
                        this.showBlockingMessageMediatorT = true;
                    } else {
                        this.showBlockingMessageMediatorT = false;
                    }
                    break;
                default:
                    this.showBlockingMessageMediatorT = false;
                    break;
            }

        }

    }

    onUploadMediaOnServer() {
        if (!this.fileData) {
            this.alertService.error("Select file first.");
            return;
        }
        const formData = new FormData();
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            this.alertService.error("Select Image file only.");
            return;
        }
        formData.append('files', (this.fileDataTemp || this.fileData));
        formData.append('documentId', this.documentId);
        formData.append('rename_file_to_this', 'i' + _.now() + '_' + this.fileData.name + '');
        this.fileUploadProgress = '0%';
        this.uploadedFileObj = {
            name: this.fileData.name,
            type: this.fileData.type,
            size: this.fileData.size,
            url: null
        }
        this.http.post(uploadAPI, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(events => {
            if (events.type === HttpEventType.UploadProgress) {
                this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                //console.log(this.fileUploadProgress);
            } else if (events.type === HttpEventType.Response) {
                this.fileUploadProgress = '';
                //console.log(events.body);
                if (events.body["status"]) {
                    //alert('SUCCESS !!');
                    //this.fileData = null;
                    this.alertService.success('Uploaded successfully', true);
                    let _uploadedUrl = events.body["data"].path;
                    if (_.startsWith(_uploadedUrl, '/')) {
                        _uploadedUrl = _uploadedUrl.substr(1);
                    }
                    this.uploadedFilePath = (uploadAccessUrl + '' + _uploadedUrl);
                    this.uploadedFileObj.url = this.uploadedFilePath;
                    //this.onacademicDocumentsUpdate(true, null, this.uploadedFileObj);
                    this.closeDialog();
                } else {

                    this.alertService.error(events.body["message"]);
                }
            }
        });
    }
    ngOnInit(): void {
        setTimeout(() => {                           //<<<---using ()=> syntax
            this.openFileUploader();
        }, 1000);
    }
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotationCnt: number = 0;

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        this.fileData = <File>event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.imageUrl = <string>reader.result;
            this.croppedImage = this.imageUrl;
            this.isImageLoaded = true;
        }
    }

    fnCrop(data) {
        const canvas = this.angularCropper.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png");

        this.croppedImage = this.imageDestination;
        this.angularCropper.cropper.getCroppedCanvas().toBlob((blob) => {
            this.fileDataTemp = blob;
            this.fileDataTemp["lastModifiedDate"] = new Date();
            this.fileDataTemp["name"] = this.fileData.name;
            this.fileDataTemp["mimetype"] = this.fileData.type;
        });
    }
    fnCropperZoomIn() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.zoom(0.1);
    }
    fnCropperZoomOut() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.zoom(-0.1);
    }
    fnCropperMoveLeft() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.move(-10, 0);
    }
    fnCropperMoveRight() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.move(10, 0);
    }
    fnCropperMoveUp() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.move(0, -10);
    }
    fnCropperMoveDown() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.move(0, 10);
    }
    fnCropperRotateLeft() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.rotate(-45);
    }
    fnCropperRotateRight() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.rotate(45);
    }
    fnCropperClear() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.clear();
    }
    fnCropperReset() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.reset();
    }
    fnCropperDestroy() {
        if (!this.isImageLoaded) {
            return;
        }
        this.angularCropper.cropper.destroy();
    }
    ready(event: any) {
        try {
            //image  crop full width
            var contData = this.angularCropper.cropper.getContainerData(); //Get container data
            this.angularCropper.cropper.setCropBoxData({ height: contData.height, width: contData.width });
        } catch (ex) {
        }
    }
    /*
    imageCropped(event: ImageCropperResult) {
        this.croppedImage = event.dataUrl;
        this.fileDataTemp = event.imageData;//base64ToFile(this.croppedImage);
        this.fileDataTemp["name"] = this.fileData.name;
        this.fileDataTemp["mimetype"] = this.fileData.type;
    }
    export(event: ImageCropperResult) {
        this.croppedImage = event.dataUrl;
        this.fileDataTemp = event.imageData;//base64ToFile(this.croppedImage);
        this.fileDataTemp["name"] = this.fileData.name;
        this.fileDataTemp["mimetype"] = this.fileData.type;
    }
    */

    /*
    imageLoaded(image: HTMLImageElement) {
        // show cropper
        this.isImageLoaded = true;
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    
        public ngAfterViewInit() {
            //this.element_img_imageCropper = document.getElementById('imageCropper') as HTMLImageElement;
            //this.initImageForCropper();
        }
    
        initImageForCropper() {
            if (!this.element_img_imageCropper) {
                return;
            }
            this.cropper = new Cropper(this.element_img_imageCropper, {
                dragMode: 'move',
                movable: true,
                viewMode: 1,
                cropmove: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    this.imageDestination = canvas.toDataURL("image/png");
                    this.croppedImage = this.imageDestination;
                },
                checkCrossOrigin: true,
                zoomable: true,
                scalable: true,
                aspectRatio: 1,
                rotatable: true,
                autoCrop: false,
                modal: true,
                guides: true,
                center: true,
                highlight: true,
                background: true,
                cropBoxMovable: true,
                cropBoxResizable: true,
                ready() {
                    // this.cropper[method](argument1, , argument2, ..., argumentN);
                    //this.cropper.move(1, -1);
    
                    // Allows chain composition
                    //this.cropper.move(1, -1).rotate(45).scale(1, -1);
                    //this.cropper.crop();
                    //this.cropper.setDragMode('crop')
                    this.cropper.setCropBoxData({ left: 0, top: 0, width: 20, height: 20 });
                },
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    this.imageDestination = canvas.toDataURL("image/png");
                    this.croppedImage = this.imageDestination;
                }
            });
            this.cropper.setCropBoxData({ left: 0, top: 0, width: 20, height: 20 });
        }
        fnCanvasRotationCnt(_inc: number) {
            if (this.canvasRotationCnt == 4) {
                this.canvasRotationCnt = 0;
            }
            this.canvasRotationCnt = this.canvasRotationCnt + _inc;
        }
    */
    openFileUploader() {
        this.element_ctrlUpload = document.getElementById('ctrlUpload') as HTMLElement;
        this.element_ctrlUpload.click();
    }

    closeDialog() {
        this.dialogRef.close({ event: 'close', data: { uploadedFilePath: this.uploadedFilePath, uploadedFileObj: this.uploadedFileObj, documentId: this.documentId, attributeKey: this.attributeKey, subFolderName: this.subFolderName } });
    }

}

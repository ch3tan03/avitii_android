import { Role,AppDocumentType } from "./role";

export class Funds {
    _id: string;
    amount: number;
    created_by: string;
	createdOn:number;
    updatedBy:[];
    updatedOn:number;	
    app_doc_type:string;
    constructor() {
        this.app_doc_type=AppDocumentType.app_funds;
    }
}
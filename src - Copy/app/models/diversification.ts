import { Role,AppDocumentType } from "./role";

export class Diversification {
    _id: string;
    category: string;
    percentage:number;
    business_percentage:number;
    invester_percentage:number;
    created_by: string;
	createdOn:number;
    updatedBy:[];
    updatedOn:number;	
    app_doc_type:string;
    constructor() {
        this.app_doc_type=AppDocumentType.diversification;
    }
}
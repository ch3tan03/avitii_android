import { Role, AppDocumentType } from "./role";

export class User {
    _id: string;
    role: string;
    appPermissions: string[];
    firstName: string;
    middleName: string;
    lastName: string;
    userName: string;
    address: string;
    emailAddress: string;
    password: string;
    acceptnewUpdates: string;
    acceptTerms: Boolean;
    cityCode: string;
    birthDate: Number;
    nationality: string;
    residence: string;
    birthPlace: string;
    promoCode: string;
    mobileNo: string;
    gender: string;
    country: string;
    education: string;
    additionalCertification: [];
    creditCards: [];
    skillSets: [];
    academicDocuments: [];
    employmentVerifications: [];
    externalAppLinks: [];
    hearAboutUs: string;
    app_doc_type: string;
    token: string;

    isVerified: Boolean;
    userVerifiedOn: Number;
    appPlanId: string;
    userMemberShipReactivatedOn: Number;
    userMemberShipExpireOn: Number;

    myProfileMedia: [];
    myProfileDetails: string;
    userType: string;
    
    myPassportMedia: [];
    myPassportMediaVerified: Boolean;
    myPassportNumber: string;
    myDLMedia: [];
    myDLMediaVerified: Boolean;
    myDLNumber: string;
    myHICardMedia: [];
    myHICardMediaVerified: Boolean;
    myRKIMedia: [];
    myRKIMediaVerified: Boolean;
    isRKIRegistered: Boolean;

    accountName: string;
    accountNumber: string;
    bankName: string;
    regNumber: string;
    cprNumber: string;
    branchDetails: string;
    mobilePayment: string;

    bitCoinWalletID: string;
    revolutWalletID: string;
    skrillWalletID: string;
    paypalWalletID: string;
    bic: string;
    accountType: string;
    iban: string;/*International Bank Account Number*/
    accountOtherDetails1: string;
    accountOtherDetails2: string;
    accountOtherDetails3: string;
    accountOtherDetails4: string;

    transactionIdCollection: object;
    bankingOldDataCollection: object;
    documentsOldDataCollection: object;

    createdOn: Number;
    updatedOn: Number;
    isDeleted: Boolean;
    deletedBy: string;
    updatedBy: [];
    selfProfileUrl: string;
    online: Boolean;
    socketId: string;
    lastLoginTime: Number;

    isRegisteredAllowed2EditProfile: Boolean;
    isUsersBankDetailsSubmitted: Boolean;
    isUsersIncomeAndExpenseProofVerified: Boolean;
    totalIncome4currentUser:number;
    totalExpense4currentUser:number;
    totalAllowedBudget:number;

    constructor() {
        this.app_doc_type = AppDocumentType.user_profile;
    }
}
export class Session {
    _id: string;
    constructor() {
    }
}

export enum Role {
    Business = 'Business',
    Invester = 'Invester',
    Lender = 'lender',
    Borrower = 'borrower',
    Admin = 'Admin'
};
export enum AppAccessPermissions {
    adminAddEdit = 'admin_user_add_edit',
    usersAddEdit = 'users_add_edit',
    borrowerPayments = 'borrower_payments',
    earningTransactions = 'earning_transactions'
};
export enum ContactRole {
    Guest = 'guest',
    Member = 'member',
    Admin = 'admin'
};

export enum SessionTypes {
    Instant = 'instant',
    Scheduled = 'scheduled',
    Restricted = 'restricted'
};

export enum AppDocumentType {
    user_profile = 'user_profile',
    app_funds = 'app_funds',
    diversification = 'diversification'
};

export enum SessionStatus {
    Pending = 'pending',
    Accepted = 'accepted',
    Rejected = 'rejected',
    RejectedOngoing = 'rejected_ongoing',
    RejectedOngoingWithRefund = 'rejected_ongoing_with_refund',
    Active = 'active',
    Completed = 'completed',
    Suspended = 'suspended',
    Ongoing = 'ongoing',
    OngoingInitiated = 'ongoing_initiated',
    OngoingAccepted = 'ongoing_accepted',
};

export enum PaymentMethod {
    Wallet = "wallet",
    Online = "online",
    refund = "refund",
};

export enum SessionExecutionType {
    FixedPrice = "fixed_price",
    Milestones = "milestones"
};

export enum AppRooms {
    my_app_main_room = "my_app_main_room",
    my_app_main_room_for_Business = "my_app_main_room_for_Business",
    my_app_main_room_for_Invester = "my_app_main_room_for_Invester",
    my_app_main_room_for_lender = "my_app_main_room_for_lender",
    my_app_main_room_for_borrower = "my_app_main_room_for_borrower",
    my_app_main_room_for_Admin = "my_app_main_room_for_Admin",
};

export enum TransactionActionType {
    "funds_add" = "funds_add",
    "paid_to_consulatant" = "paid_to_consulatant",
    "session_accepted" = "session_accepted",
    "session_extended" = "session_extended",
    "session_ongoing" = "session_ongoing",
    "paid_for_loan_insurance" = "paid_for_loan_insurance",
    "paid_for_app_plan_extension" = "paid_for_app_plan_extension",
}
export enum UserType {
    new_lender = 'new_lender',
    good_lender = 'good_lender',
    expert_lender = 'expert_lender',
    super_lender = 'super_lender',
    proff_lender = 'proff_lender',

    new_borrower = "new_borrower",
    risky_borrower = "risky_borrower",
    between_borrower = "between_borrower",
    good_borrower = "good_borrower",
    super_borrower = "super_borrower",
};

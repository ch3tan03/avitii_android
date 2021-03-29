//const payUMoney = require("payumoney_nodejs");
const Razorpay = require('razorpay')
const config = require("./../config");

//#region UAT Key and Secret
const key_id = config.Razorpay_KEY_ID; //UAT
const key_secret = config.Razorpay_KEY_SECRET; //UAT
//#endregion UAT Key and Secret

////#region PROD Key and Secret
//const key_id = config.Razorpay_PROD_KEY_ID; //PROD
//const key_secret = config.Razorpay_PROD_KEY_SECRET; //PROD
////#endregion PROD Key and Secret

var rzp = null;

function PaymentService() {};

/*
PaymentService.constructor = function() {
    // Set you MERCHANT_KEY, MERCHANT_SALT_KEY, PAYUMONEY_AUTHORIZATION_HEADER
    // for both Production and Sandox Account
    console.log('10', config.PAYUMONEY_MERCHANT_KEY, config.PAYUMONEY_MERCHANT_SALT, config.PAYUMONEY_AUTHORIZATION_HEADER);
    console.log('11', config.PAYUMONEY_MERCHANT_KEY_SANDBOX, config.PAYUMONEY_MERCHANT_SALT_SANDBOX, config.PAYUMONEY_AUTHORIZATION_HEADER_SANDBOX);
    payUMoney.setProdKeys(config.PAYUMONEY_MERCHANT_KEY, config.PAYUMONEY_MERCHANT_SALT, config.PAYUMONEY_AUTHORIZATION_HEADER);
    payUMoney.setSandboxKeys(config.PAYUMONEY_MERCHANT_KEY_SANDBOX, config.PAYUMONEY_MERCHANT_SALT_SANDBOX, config.PAYUMONEY_AUTHORIZATION_HEADER_SANDBOX);

    payUMoney.isProdMode(config.PAYUMONEY_IS_PROD_MODE); //set false for use of sandbox mode
};

PaymentService.makePayment = function(paymentBody, callback) {
    payUMoney.pay(paymentBody, (error, response) => {
        if (error) {
            console.error("makePayment error : " + error);
            callback(error, null);
        } else {
            console.log("Payment Redirection link " + response);
            callback(error, { url: response });
        }
    });
};

PaymentService.paymentSuccess = function(paymentSuccessBody, callback) {
    console.log("Payment Success");
    console.log("Payment Details : " + JSON.stringify(paymentSuccessBody));
    // You can Update your user payment Success status here
    callback(null, { status: "Payment Success" });
}

PaymentService.paymentFailure = function(paymentFailureBody, callback) {
    console.log("Payment Failure");
    console.log("Payment Details : " + JSON.stringify(paymentFailureBody));
    // You can Update your user payment Failure status here
    callback(null, { status: "Payment Failed" });
}
*/
PaymentService.constructor = function() {
    rzp = new Razorpay({
        key_id: key_id, // your `KEY_ID`
        key_secret: key_secret // your `KEY_SECRET`
    });
};

PaymentService.createNewOrder = function(options, callback) {
    rzp.orders.create(options).then((data) => {
        console.log(data);
        data.key_id = key_id;
        callback(null, data);
    }).catch((error) => {
        console.error(error);
        callback(error, null);
    })
};
/*

// --------------------
// Payments
// --------------------

// Fetches all payments
rzp.payments.all({
    from: 'Aug 25, 2016',
    to: 'Aug 30, 2016'
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Fetch a particular payment
rzp.payments.fetch('pay_6CnVGA5eq4D7Ce').then((data) => {
    // success
}).catch((error) => {
    // failure
})

// Capture a particular payment
rzp.payments.capture('pay_6CnVGA5eq4D7Ce', 1000).then((data) => {
    // success
}).catch((error) => {
    // error
})

// Full refund for a payment
rzp.payments.refund('pay_6CnTwKKUY8iKCU').then((data) => {
    // success
}).catch((error) => {
    // error
})

// Partial refund for a payment
rzp.payments.refund('pay_6CnVGA5eq4D7Ce', {
    amount: 500,
    notes: {
        note1: 'This is a test refund',
        note2: 'This is a test note'
    }
}).then((data) => {
    // success
}).catch((error) => {
    console.error(error)
        // error
})

// -------------------------
// Customers
// -------------------------
rzp.customers.create({
    name: 'selvagsz',
    email: 'test@razorpay.com',
    contact: '123456789'
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})

rzp.customers.edit('cust_6fpspJYDovP0Tg', {
    name: 'selvagsz',
    email: 'test@razorpay.com',
    contact: '987654321'
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})

rzp.customers.fetch('cust_6fpspJYDovP0Tg').then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})

rzp.customers.fetchTokens('cust_6fpspJYDovP0Tg').then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})

rzp.customers.fetchToken('cust_6fpspJYDovP0Tg', 'tkn_YDovP0Tg6fpsp').then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})

rzp.customers.deleteToken('cust_6fpspJYDovP0Tg', 'tkn_YDovP0Tg6fpsp').then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})


// -------------------------
// Orders
// -------------------------

rzp.orders.all({
    from: 'Aug 25, 2016',
    to: 'Dec 30, 2016',
    count: 25
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

rzp.orders.fetchPayments('order_6kWIxkrdH3hJWM').then((data) => {
    // console.log(data)
}).catch((error) => {
    // error
})


// -------------------------
// Transfers
// -------------------------

// Fetch all transfers
rzp.transfers.all({
    from: 'Aug 25, 2016',
    to: 'Dec 30, 2016',
    count: 25
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Fetch all transfers made on a specific payment
rzp.transfers.all({
    from: 'Aug 25, 2016',
    to: 'Dec 30, 2016',
    count: 25,
    payment_id: 'pay_6CnVGA5eq4D7Ce'
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Fetch a particular transfer by ID
rzp.transfers.fetch('trf_714iNLGsd7k36a').then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Edit transfer
rzp.transfers.edit('trf_714iNLGsd7k36a', {
    notes: {
        note1: 'This is a test note'
    }
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Create a transfer reversal
rzp.transfers.reverse('trf_714iNLGsd7k36a', {
    amount: 200,
    currency: 'INR',
    notes: {
        note1: 'This is a test note'
    }
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Create direct transfers
rzp.transfers.create({
    account: 'acc_7HGyrafdeQDGfX',
    amount: 100,
    currency: 'INR'
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})

// Create transfers on a payment
rzp.payments.transfer('pay_6CnVGA5eq4D7Ce', {
    transfers: [{
        account: 'acc_7HGyrafdeQDGfX',
        amount: 100,
        currency: 'INR'
    }]
}).then((data) => {
    // console.log(data)
}).catch((error) => {
    // console.error(error)
})
*/
PaymentService.constructor();

module.exports = PaymentService;
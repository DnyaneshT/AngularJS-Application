var model = { customer: "Student", items: [
    {	bill1: "Electricity", status: false },
    {	bill: "Internet(Wi/fi)", status: false },
    {	bill: "Parking Charges", status: false	},
    {	bill: "Phone", status: true },
    { 	bill: "House Tax", status: true},	
    {	bill: "Other Tax", status: false}
]
};

var billpayApp = angular.module("billpayApp", []);

console.log(model)



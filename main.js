#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var myBalance = 25000;
var myPin = 2244;
var userpin = await inquirer_1.default.prompt([
    {
        message: "Enter your pin number",
        type: "number",
        name: "pinNumber"
    }
]);
if (userpin.pinNumber === myPin) {
    console.log(chalk_1.default.greenBright.bold.italic("Your pin is correct"));
    var operationAns = await inquirer_1.default.prompt({
        message: "Please Chose An Option",
        type: "list",
        name: "operation",
        //   choices: ["cashWithdraw", "balanceInquiry", "depositCash"]
        choices: ["cashWithdraw", new inquirer_1.default.Separator(), "balanceInquiry", new inquirer_1.default.Separator(), "depositCash", new inquirer_1.default.Separator(),]
    });
    if (operationAns.operation === "balanceInquiry") {
        console.log(chalk_1.default.magentaBright(myBalance));
    }
    else if (operationAns.operation === "depositCash") {
        var depositAmu = await inquirer_1.default.prompt({
            message: "Enter Amount to  deposit",
            type: "number",
            name: "amountDep"
        });
        console.log(chalk_1.default.magentaBright(myBalance += depositAmu.amountDep));
    }
    else if (operationAns.operation === "cashWithdraw") {
        var withdrawAmu = await inquirer_1.default.prompt({
            message: "Enter Amount to  Withdraw",
            type: "list",
            name: "amountwithdraw",
            choices: ["10000", new inquirer_1.default.Separator(), "5000", new inquirer_1.default.Separator(), "2000", new inquirer_1.default.Separator(), "1000", new inquirer_1.default.Separator(), "Other", new inquirer_1.default.Separator()]
        });
        if (withdrawAmu.amountwithdraw === "Other") {
            var otherAmu = await inquirer_1.default.prompt({
                message: "Enter Other Amount to  Withdraw",
                type: "number",
                name: "otherWithdraw",
            });
            if (myBalance >= otherAmu.otherWithdraw) {
                console.log(chalk_1.default.magentaBright(myBalance -= otherAmu.otherWithdraw));
            }
            else {
                console.log(chalk_1.default.redBright("Insuficient Balance, Your current balance is Rs. " + myBalance));
            }
        }
        else {
            if (myBalance >= withdrawAmu.amountwithdraw) {
                console.log(chalk_1.default.magentaBright(myBalance -= withdrawAmu.amountwithdraw));
            }
            else {
                console.log(chalk_1.default.redBright("Insuficient Balance, Your current balance is Rs. " + myBalance));
            }
        }
    }
    else {
        console.log(chalk_1.default.redBright("Invalid Option"));
    }
}
else {
    console.log(chalk_1.default.redBright("Your pin is wrong"));
}
;

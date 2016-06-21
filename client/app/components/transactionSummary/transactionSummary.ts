import {Component} from "@angular/core";

@Component({
    selector: "transactionSummary",
    templateUrl: "app/components/transactionSummary/transactionSummary.html"
})
export class TransactionSummaryComponent {

    users: string;
    saldo: number;
    openTransactions: number;
    transactionsLastWeek: number;

    constructor() {

        this.users = "Alle";
        this.saldo = -9.63;
        this.openTransactions = 2;
        this.transactionsLastWeek = 3;

    }


}

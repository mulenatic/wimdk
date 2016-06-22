import {Component} from "@angular/core";

import {TransactionSummary, TransactionSearchService} from "../../service/transactionSearch/TransactionSearchService";

@Component({
    selector: "transactionSummary",
    templateUrl: "app/components/transactionSummary/transactionSummary.html",
    providers: [TransactionSearchService]
})
export class TransactionSummaryComponent {

    transactionSummary: TransactionSummary;

    constructor(transactionSearchService: TransactionSearchService) {

        this.transactionSummary = transactionSearchService.getTransactionSummary();
        console.log("transactionsummary: " + this.transactionSummary.users);

    }


}

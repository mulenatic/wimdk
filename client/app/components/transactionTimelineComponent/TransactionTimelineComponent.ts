import {Component} from "@angular/core";

import {Transaction, TransactionSearchService} from "../../service/transactionSearch/TransactionSearchService";

@Component({
    selector: "transactionTimeline",
    templateUrl: "app/components/transactionTimelineComponent/TransactionTimelineComponent.html",
    providers: [TransactionSearchService]
})
export class TransactionTimelineComponent {

    transactions: Array<Transaction>;

    constructor(transactionSearchService: TransactionSearchService) {

        this.transactions = transactionSearchService.getTransactions();

    }

}



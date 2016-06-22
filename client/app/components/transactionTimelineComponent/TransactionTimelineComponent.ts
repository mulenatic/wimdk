import {Component} from "@angular/core";


import {Transaction, TransactionSearchService} from "../../service/transactionSearch/TransactionSearchService";
import {ConfirmedBadgeComponent} from "../confirmedBadgeComponent/ConfirmedBadgeComponent";

@Component({
    selector: "transactionTimeline",
    templateUrl: "app/components/transactionTimelineComponent/TransactionTimelineComponent.html",
    providers: [TransactionSearchService],
    directives: [ConfirmedBadgeComponent]
})
export class TransactionTimelineComponent {

    transactions: Array<Transaction>;

    constructor(transactionSearchService: TransactionSearchService) {

        this.transactions = transactionSearchService.getTransactions();

    }

}


import {Component} from "@angular/core";

import {TransactionSummaryComponent} from "../../components/transactionSummary/transactionSummary";

@Component({
    selector: "app",
    directives: [TransactionSummaryComponent],
    templateUrl: "app/components/application/application.html"
})
export class ApplicationComponent { }

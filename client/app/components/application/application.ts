import {Component} from "@angular/core";

import {TransactionSummaryComponent} from "../../components/transactionSummary/transactionSummary";
import {TransactionTimelineComponent} from "../../components/transactionTimelineComponent/TransactionTimelineComponent";

@Component({
    selector: "app",
    directives: [TransactionSummaryComponent, TransactionTimelineComponent],
    templateUrl: "app/components/application/application.html"
})
export class ApplicationComponent { }

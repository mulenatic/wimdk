import {Component, Input} from "@angular/core";


@Component({
    selector: "trans-timeline-badge",
    templateUrl: "app/components/transactionTimelineBadgeComponent/TransactionTimelineBadgeComponent.html"
})
export class TransactionTimelineBadgeComponent {

    @Input() betrag: number;

}

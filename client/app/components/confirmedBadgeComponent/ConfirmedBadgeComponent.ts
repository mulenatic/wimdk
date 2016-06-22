import {Component, Input} from "@angular/core";

@Component({
    selector: "confirmedBadge",
    template: `<span class="badge">{{getDisplayValue()}}</span>`
})
export class ConfirmedBadgeComponent {

    @Input() isConfirmed: boolean;

    getDisplayValue(): string {

        let result: string = "unbekannt";
        if (this.isConfirmed) {
            result = "bestätigt";
        } else {
            result = "unbestätigt";
        }

        return result;
    }


}



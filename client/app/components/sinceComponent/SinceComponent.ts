import {Component, Input} from "@angular/core";

const oneHour: number = 60 * 60 * 1000;

@Component({
    selector: "since",
    template: `<small class="text-muted"><i class="glyphicon glyphicon-time"></i>{{getDisplayValue()}}</small>`
})
export class SinceComponent {

    @Input() creationDate: Date;


    getDisplayValue(): string {

        let result: string = "unbekannt";
        let now: Date = new Date();
        let duration: number = now.getTime() - this.creationDate.getTime();


        if (duration < oneHour) {
            let min: number = now.getMinutes() - this.creationDate.getMinutes();
            result = `Vor ${min} Minuten`;
        } else if (duration < 24 * oneHour) {
            let hours: number = now.getMinutes() - this.creationDate.getHours();
            result = `Vor ${hours} Stunden`;
        } else {
            result = this.creationDate.toLocaleDateString() + " " + this.creationDate.toLocaleTimeString();
        }

        return result;


    }

}

import { Component, Input} from "@angular/core";

@Component({
    selector: "typo",
    template: `You entered: {{word}}`
})

export class typoGraphy {
    @Input() word: string;    
}
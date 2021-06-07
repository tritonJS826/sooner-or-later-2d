import { action, observable, makeObservable } from "mobx"
interface IOption {
    IDontKnow: string;
}

export class Option {
    IDontKnow: string;

    constructor({ IDontKnow }: IOption) {
        this.IDontKnow = IDontKnow;

        makeObservable(this, {
            IDontKnow: observable,
        });
    }
}

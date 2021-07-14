import { makeObservable, action } from 'mobx';
import { Difficulty } from 'Model/Difficulty';

interface Filter {
    id?: string;
    word?: string;
    hostName?: string;
    difficulty?: Difficulty;
}

class MultiplayerStore {
     filter: Filter = {};

     constructor() {
       makeObservable(this);
     }

    @action.bound
     setFilter(filter: Filter) {
       this.filter = filter;
     }
}

export default MultiplayerStore;

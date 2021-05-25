import { action, makeObservable, observable } from "mobx";

class TestStore {
    randomNumber: number | null = null;

    constructor() {
        makeObservable(this, {
            randomNumber: observable,
            setNumber: action
        })
    }

    setNumber(number: number) {
        this.randomNumber = number
    }
}

const BASE_URL = 'ws://localhost:';
const PORT = '5001';

const webSocket = new WebSocket(BASE_URL + PORT);

export const testStore = new TestStore();

webSocket.onmessage = function (event) {
    testStore.setNumber(Number(event.data)); 
  }

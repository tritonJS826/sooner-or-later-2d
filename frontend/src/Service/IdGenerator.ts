class idGenerator {
    id: string;

    constructor() {
        this.id = '0';
    }

    nextId(): void {
        this.id = String(Number(this.id) + 1);
    }

    generateId(): string {
        this.nextId();
        return this.id
    }
}

const generator = new idGenerator();
 
export default generator;
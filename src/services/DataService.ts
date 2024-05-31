// services/DataService.ts
export class DataService<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    getAll(): T[] {
        return this.data;
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.data.find(predicate);
    }
}

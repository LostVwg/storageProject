export namespace StorageModule {

    export interface IStorage {

        addElement: (key: number, value: any) => undefined;
        getElement(key: string): any | null;
        delElement: (key: string) => undefined | null;
        resetAll(): void;
        getData(): any | null;
        // readonly getData: number;
    }

    export class StorageClass implements IStorage {
        data = {};

        constructor(data) {
            this.data = data;
        }

        addElement(key: number, value: any): undefined {
            this.data[key] = value;
            return
        }

        getElement(key: string): any {
            return this.data[key]
        }

        delElement(key: string): undefined {
            if (Object.keys(this.data).length == 0)
                return;
            else
                delete this.data[key];
            return
        }

        resetAll(): void {
            for (let i in this.data) {
                delete this.data[i];
            }
        }

        getData(): any {
            return this.data
        }

        // get getData(): number {
        //     return Object.keys(this.data).length
        // }
    }
// storage.addElement(1, 10);
// storage.addElement(2, 8);
}






export abstract class AbstractImporter<T> {
    public process(rawData: any, containerId: string): void {
        this.validate(rawData);
        const mappedData = this.map(rawData);
        this.render(mappedData, containerId);
    }

    protected abstract validate(data: any): void;
    protected abstract map(data: any): T;
    protected abstract render(data: T, containerId: string): void;
}
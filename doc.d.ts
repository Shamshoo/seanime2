declare interface DocElement {
    text(): string;
    attr(name: string): string | undefined;
    find(selector: string): DocElement;
    data(name: string): string;
    each(callback: (index: number, element: DocElement) => void): void;
    first(): DocElement;
    last(): DocElement;
}

declare function LoadDoc(html: string): (selector: string) => {
    text(): string;
    attr(name: string): string | undefined;
    find(selector: string): DocElement;
    data(name: string): string;
    each(callback: (index: number, element: DocElement) => void): void;
    first(): DocElement;
    last(): DocElement;
};

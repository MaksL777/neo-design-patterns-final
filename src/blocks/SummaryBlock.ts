import { IBlock } from './IBlock';

export class SummaryBlock implements IBlock {
    constructor(private text: string) {}
    render(): HTMLElement {
        const div = document.createElement('div');
        div.className = 'block';
        div.innerHTML = `<h2>Про себе</h2><p>${this.text}</p>`;
        return div;
    }
}
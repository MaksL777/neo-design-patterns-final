import { IBlock } from './IBlock';
import { HeaderData } from '../models/ResumeModel';

export class HeaderBlock implements IBlock {
    constructor(private data: HeaderData) {}
    render(): HTMLElement {
        const div = document.createElement('div');
        div.className = 'block header-block';
        div.innerHTML = `<h1>${this.data.name}</h1><p>Email: ${this.data.email} | Телефон: ${this.data.phone}</p>`;
        return div;
    }
}
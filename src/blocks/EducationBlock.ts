import { IBlock } from './IBlock';

export class EducationBlock implements IBlock {
    constructor(private data: string[]) {}
    render(): HTMLElement {
        const div = document.createElement('div');
        div.innerHTML = `<h2>Освіта</h2><ul>${this.data.map(e => `<li>${e}</li>`).join('')}</ul>`;
        return div;
    }
}
import { IBlock } from './IBlock';

export class SkillsBlock implements IBlock {
    constructor(private data: string[]) {}
    render(): HTMLElement {
        const div = document.createElement('div');
        div.innerHTML = `<h2>Навички</h2><ul>${this.data.map(s => `<li>${s}</li>`).join('')}</ul>`;
        return div;
    }
}
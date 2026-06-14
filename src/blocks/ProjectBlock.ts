import { IBlock } from './IBlock';
import { ProjectData } from '../models/ResumeModel';

export class ProjectBlock implements IBlock {
    constructor(private data: ProjectData) {}
    render(): HTMLElement {
        const div = document.createElement('div');
        div.className = 'project-block';
        div.innerHTML = `<h4>Проєкт: ${this.data.name}</h4><p>${this.data.description}</p>`;
        return div;
    }
}
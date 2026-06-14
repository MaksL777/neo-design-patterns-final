import { IBlock } from './IBlock';
import { ExperienceData } from '../models/ResumeModel';
import { ProjectBlock } from './ProjectBlock';
import { HighlightDecorator } from '../decorators/HighlightDecorator';

export class ExperienceBlock implements IBlock {
    constructor(private data: ExperienceData[]) {}

    render(): HTMLElement {
        const div = document.createElement('div');
        div.className = 'block experience-block';
        div.innerHTML = `<h2>Досвід роботи</h2>`;

        this.data.forEach(exp => {
            const companyTitle = document.createElement('h3');
            companyTitle.textContent = `Компанія: ${exp.company}`;
            div.appendChild(companyTitle);
            exp.projects.forEach(proj => {
                let projectBlock: IBlock = new ProjectBlock(proj);
                projectBlock = new HighlightDecorator(projectBlock, proj.isRecent);
                
                div.appendChild(projectBlock.render());
            });
        });

        return div;
    }
}
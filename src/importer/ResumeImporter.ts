import { AbstractImporter } from './AbstractImporter';
import { ResumeModel } from '../models/ResumeModel';
import { BlockFactory } from '../blocks/BlockFactory';

export class ResumeImporter extends AbstractImporter<ResumeModel> {
    
    protected validate(data: any): void {
        const requiredKeys = ['header', 'summary', 'experience', 'education', 'skills'];
        for (const key of requiredKeys) {
            if (!data[key]) {
                throw new Error(`Validation Error: Missing required block '${key}'`);
            }
        }
    }

    protected map(data: any): ResumeModel {
        return data as ResumeModel;
    }

    protected render(data: ResumeModel, containerId: string): void {
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Container #${containerId} not found`);

        container.innerHTML = ''; 
        container.appendChild(BlockFactory.createBlock('header', data.header).render());
        container.appendChild(BlockFactory.createBlock('summary', data.summary).render());
        container.appendChild(BlockFactory.createBlock('experience', data.experience).render());
        container.appendChild(BlockFactory.createBlock('education', data.education).render());
        container.appendChild(BlockFactory.createBlock('skills', data.skills).render());
    }
}
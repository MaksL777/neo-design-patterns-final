import { IBlock } from './IBlock';
import { HeaderBlock } from './HeaderBlock';
import { SummaryBlock } from './SummaryBlock';
import { ExperienceBlock } from './ExperienceBlock';
import { EducationBlock } from './EducationBlock';
import { SkillsBlock } from './SkillsBlock';

export type BlockType = 'header' | 'summary' | 'experience' | 'education' | 'skills';

export class BlockFactory {
    static createBlock(type: BlockType, data: any): IBlock {
        switch (type) {
            case 'header': return new HeaderBlock(data);
            case 'summary': return new SummaryBlock(data);
            case 'experience': return new ExperienceBlock(data);
            case 'education': return new EducationBlock(data);
            case 'skills': return new SkillsBlock(data);
            default: throw new Error(`Unknown block type: ${type}`);
        }
    }
}
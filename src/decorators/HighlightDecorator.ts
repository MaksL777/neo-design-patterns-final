import { IBlock } from '../blocks/IBlock';

export class HighlightDecorator implements IBlock {
    constructor(private wrapper: IBlock, private isRecent: boolean) {}

    render(): HTMLElement {
        const el = this.wrapper.render();
        if (this.isRecent) {
            el.classList.add('highlight'); 
        }
        return el;
    }
}
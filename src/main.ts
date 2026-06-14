import { ResumePage } from './facade/ResumePage';
document.addEventListener('DOMContentLoaded', () => {
    ResumePage.init('/resume.json', 'resume-content');
});
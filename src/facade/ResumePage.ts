import { ResumeImporter } from '../importer/ResumeImporter';

export class ResumePage {
    static async init(jsonUrl: string, containerId: string): Promise<void> {
        try {
            const response = await fetch(jsonUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            
            const importer = new ResumeImporter();
            importer.process(data, containerId); 
            
        } catch (error) {
            console.error("Failed to load or process resume:", error);
            const container = document.getElementById(containerId);
            if (container) container.innerHTML = `<p style="color:red">Помилка завантаження резюме.</p>`;
        }
    }
}
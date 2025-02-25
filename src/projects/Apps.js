// src/projects/Apps.js
import { getNextId } from "./idCounter.js";
import linguagemimage1 from "../assets/images/apps/cinco-linguagens/linguagem-image1.png";
import linguagemimage2 from "../assets/images/apps/cinco-linguagens/linguagem-image2.png";
import linguagemimage3 from "../assets/images/apps/cinco-linguagens/linguagem-image3.png";
import linguagemimage4 from "../assets/images/apps/cinco-linguagens/linguagem-image4.png";
import linguagemimage5 from "../assets/images/apps/cinco-linguagens/linguagem-image5.png";
import linguagemimage6 from "../assets/images/apps/cinco-linguagens/linguagem-image6.png";


const AppsProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único 
        title: "Cinco Linguagens do Amor",
        category: "Apps",
        images: [linguagemimage1],
        popupImages: [
            linguagemimage1,
            linguagemimage2,
            linguagemimage3,
            linguagemimage4,
            linguagemimage5,
            linguagemimage6,
        ],
        description: "O app 'Cinco Linguagens do Amor' é um teste interativo que identifica a linguagem do amor do usuário com design personalizável por gênero.",
        tags: ["Flutter"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default AppsProjects;
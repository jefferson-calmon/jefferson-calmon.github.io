const projects = [
    {
        title: "Insure",
        description: "Landing page de uma empresa de contração de seguros.",
        path: "/projects/insure",
        classImage: "insure",
    },
    {
        title: "Easybank",
        description: "Easybank é desafio disponibilizado pelo Frontend Mentor, que visa melhorar as habilidades front-end dos devs.",
        path: "/projects/easybank",
        classImage: "easybank",
    },
    {
        title: "Learn Go",
        description: "Lear Go é uma plataforma de aprendizado a distância.",
        path: "/projects/learngo",
        classImage: "learn",
    },
    {
        title: "Insure",
        description: "Site para a advogada Rosana Calmon",
        path: "/projects/Rosana-Calmon",
        classImage: "rosana",
    },
    {
        title: "Ecoleta",
        description: "Projeto criado durante a Next Level Week. App mobile para IOS e Android com React Native, Back-end com node.js e front-end com ReactJS.",
        path: "/projects/ecoleta",
        classImage: "ecoleta",
    },
    {
        title: "Isabela Ferrari",
        description: "Blog criado para Isabela Ferrari.",
        path: "/projects/site-isabela/",
        classImage: "site-isabela",
    },
]

const last = document.getElementById('last-projects');

for (let i in projects){

    const divBox = document.createElement('div');
    divBox.className = `box ${projects[i].classImage}` ;
    
    const contentBox = document.createElement('div');
    contentBox.className = 'contentBx'
    
    const h2 = document.createElement('h2');
    h2.textContent = projects[i].title;
    contentBox.appendChild(h2);
    
    const p = document.createElement('p');
    p.textContent = projects[i].description;
    contentBox.appendChild(p);
    
    const a = document.createElement('a');
    a.href = projects[i].path
    a.textContent = 'Ver mais'
    contentBox.appendChild(a);
    
    divBox.appendChild(contentBox);
    
    last.appendChild(divBox)
}
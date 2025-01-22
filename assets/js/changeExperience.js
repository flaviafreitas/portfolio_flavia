export function changeExperience(
    nameCard,
    changeDescription,
    titleExperience,
    companyExperience,
    dateExperience
) {
    const container = document.querySelector(".experience__container-text");
    const varChangeDescription = document.querySelector(".changeExperience");
    const varTitleExperience = document.querySelector(".experience__container-text h3");
    const varCompanyExperience = document.querySelector(".companyExperience");
    const varDateExperience = document.querySelector(".dateExperience");

    document.querySelector(nameCard).addEventListener("click", () => {
        container.classList.add("hidden");
        setTimeout(() => {
            varChangeDescription.innerHTML = changeDescription;
            varTitleExperience.innerHTML = titleExperience;
            varCompanyExperience.innerHTML = companyExperience;
            varDateExperience.innerHTML = dateExperience;
            container.classList.remove("hidden");
        }, 300);
    });
}


export function setActiveCompany() {
    const header = document.getElementById("experience-company");
    const btns = header.getElementsByClassName("company");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("activeExperience");
            current[0].classList.remove("activeExperience");
            this.classList.add("activeExperience");
        });
    }
}

export function initExperience() {
    const experiences = [
        {
            selector: ".somadev",
            description: "Sou responsável pela criação de protótipos interativos para plataformas desktop e mobile, além de atuar como desenvolvedora fullstack com foco em frontend, participando de diversos projetos que criam soluções digitais personalizadas para outras empresas.",
            title: "Frontend Developer & UI/UX Designer",
            company: "SomaDEV",
            date: "Janeiro 2024 - Atualmente"
        },
        {
            selector: ".dnc",
            description: "Como estagiária, atuei em diversas frentes de trabalho, incluindo prototipagem de interfaces e fluxos no Figma, desenvolvimento de frontend utilizando React e Vue.js, implementação de backend com Node.js e PHP, e desenvolvimento de aplicativos móveis em React Native.",
            title: "Software Engineer Intern",
            company: "Escola DNC",
            date: "Outubro 2022 - Outubro 2023"
        },
        {
            selector: ".sumup",
            description: "Como analista de qualidade, tinha a missão de identificar e resolver bugs nas plataformas, serviços e produtos oferecidos pela empresa. Com essa experiência adquiri habilidades no uso de metodologias ágeis, ferramentas de rastreamento, integração e banco de dados.",
            title: "Specialized Bug Assistant III",
            company: "SumUp",
            date: "Novembro 2020 - Maio 2022"
        }
    ];

    experiences.forEach(exp => {
        changeExperience(
            exp.selector,
            exp.description,
            exp.title,
            exp.company,
            exp.date
        );
    });

    setActiveCompany();
}
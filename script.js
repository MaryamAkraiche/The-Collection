const collection = [
    {
        picture: "assets/yassine.jpeg",
        name: "Bono Yassine",
        position: "gardien",
        goal: "0",
        number: "1",
    },
    {
        picture: "assets/hakimi.jpg",
        name: "Hakimi Achraf",
        position: "défenseur",
        goal: "9",
        number: "2",
    },
    {
        picture: "assets/amrabat.jpg",
        name: "Amrabat Sofiane",
        position: "milieu",
        goal: "0",
        number: "4",
    },
    {
        picture: "assets/Nayef.jpg",
        name: "Aguerd Nayef",
        position: "Défenseur",
        goal: "1",
        number: "5",
    },
    {
        picture: "assets/ziyech.jpg",
        name: "Ziyech Hakim",
        position: "milieu",
        goal: "22",
        number: "7",
    },
    {
        picture: "assets/onahi.jpg",
        name: "Ounahi Azzedine",
        position: "attaquant",
        goal: "18",
        number: "8",
    },
    {
        picture: "assets/kaabi.jpg",
        name: "El Kaabi Ayoub",
        position: "attaquant",
        goal: "10",
        number: "9",
    },
    {
        picture: "assets/Dari.jpg",
        name: "Dari Achraf",
        position: "défenseur",
        goal: "1",
        number: "15",
    },
    {
        picture: "assets/en-nesyri.jpg",
        name: "En-Nesyri Youssef",
        position: "milieu",
        goal: "22",
        number: "19",
    },
    {
        picture: "assets/bilal.jpg",
        name: "El Khannouss	Bilal",
        position: "milieu",
        goal: "0",
        number: "23",
    },
];

const playersCardsContainer = document.getElementsByTagName("main")[0];

function createPlayerCard(player) {
    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `
            <img src=${player.picture}>
            <section class="tags">
                <p class="one">N ${player.number}</p>
                <p class="two"><span style="text-transform: capitalize;">${player.position}</span> </p>
            </section>
            <h1>${player.name}</h1>
            <p>
                Un footballeur international marocain jouant au poste 
                de ${player.position} avec le numéro ${player.number}, il a marqué ${player.goal} buts.
            </p>
    `;

    playersCardsContainer.appendChild(section);
}

for (player of collection){
    createPlayerCard(player);
}

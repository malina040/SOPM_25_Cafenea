const produse = {
  espresso: {
    titlu: "Espresso ☕",
    descriere: "Shot concentrat de cafea cu aromă intensă.",
    imagine: "espresso.jpg",
    ingrediente: ["Cafea arabica 100%", "Apă filtrată"],
    alergeni: "Nu conține alergeni."
  },
  cappuccino: {
    titlu: "Cappuccino ☕",
    descriere: "Espresso dublu cu lapte cremos și spumă fină.",
    imagine: "cappuccino.jpg",
    ingrediente: ["Cafea espresso", "Lapte integral", "Spumă de lapte"],
    alergeni: "Conține lactoză."
  },
  flatwhite: {
    titlu: "Flat White ☕",
    descriere: "Dublu espresso cu lapte microspumat, perfect echilibrat.",
    imagine: "flatwhite.jpg",
    ingrediente: ["Espresso dublu", "Lapte integral"],
    alergeni: "Conține lactoză."
  },
  cheesecake: {
    titlu: "Cheesecake 🍰",
    descriere: "Clasic newyorkez cu sos de fructe de pădure.",
    imagine: "cheesecake.jpg",
    ingrediente: ["Brânză mascarpone", "Ouă", "Biscuiți digestivi", "Fructe de pădure"],
    alergeni: "Conține gluten, lactoză și ouă."
  },
  tiramisu: {
    titlu: "Tiramisu 🍮",
    descriere: "Rețetă autentică italiană cu cafea espresso și mascarpone.",
    imagine: "tiramisu.jpg",
    ingrediente: ["Mascarpone", "Cafea", "Pișcoturi", "Cacao pudră"],
    alergeni: "Conține gluten, lactoză și ouă."
  },
  brownie: {
    titlu: "Brownie 🍫",
    descriere: "Prăjitură densă cu ciocolată belgiană și nuci.",
    imagine: "brownie.jpg",
    ingrediente: ["Ciocolată belgiană", "Unt", "Ouă", "Nuci"],
    alergeni: "Conține gluten, lactoză, ouă și nuci."
  },
  ceai_verde: {
    titlu: "Ceai Verde 🍵",
    descriere: "Infuzie delicată din frunze de ceai verde sencha.",
    imagine: "ceaiverde.jpg",
    ingrediente: ["Frunze de ceai verde", "Apă fierbinte"],
    alergeni: "Nu conține alergeni."
  },
  ceai_negru: {
    titlu: "Ceai Negru 🍂",
    descriere: "Aromă puternică și intensă, perfectă pentru dimineți.",
    imagine: "ceainegru.jpg",
    ingrediente: ["Frunze de ceai Assam", "Apă fierbinte"],
    alergeni: "Nu conține alergeni."
  },
  ceai_floral: {
    titlu: "Ceai Floral 🌸",
    descriere: "Amestec relaxant cu lavandă, mușețel și trandafir.",
    imagine: "ceaifloral.jpg",
    ingrediente: ["Mușețel", "Lavandă", "Trandafir", "Măceșe"],
    alergeni: "Poate conține urme de polen natural."
  }
};

function openModal(key) {
  const produs = produse[key];
  document.getElementById("modal-img").src = produs.imagine;
  document.getElementById("modal-title").textContent = produs.titlu;
  document.getElementById("modal-desc").textContent = produs.descriere;

  const lista = document.getElementById("modal-ingredients");
  lista.innerHTML = "";
  produs.ingrediente.forEach(i => {
    const li = document.createElement("li");
    li.textContent = "🍃 " + i;
    lista.appendChild(li);
  });

  document.getElementById("modal-allergens").textContent = "⚠️ " + produs.alergeni;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) modal.style.display = "none";
};

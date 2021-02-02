

const form = document.querySelector(".form");
const findBtn = document.querySelector(".find-btn");

const card = document.querySelector(".card");
const viewCep = document.querySelector(".view-cep");
const viewLog = document.querySelector(".view-log");
const viewDistrict = document.querySelector(".view-district");
const viewLocation = document.querySelector(".view-location");
const viewDDD = document.querySelector(".view-ddd");

function saveCep(name, value) {
  localStorage[name] = value;
}

function handleKeyUp(event) {
  const name = event.target.name;
  const value = event.target.value;
  saveCep(name, value);
}
form.addEventListener("keyup", handleKeyUp);

function findCep(event) {
  event.preventDefault();
  let properties = Object.keys(localStorage);
  let cep = +localStorage.getItem("cep");
  const getCep = fetch(`https://viacep.com.br/ws/0${cep}/json`);

  getCep.then((resolve) => resolve.json())
    .then((body) => {
      viewCep.innerText = 'CEP: ' + body.cep;
      viewLog.innerText = 'Logradouro: ' + body.logradouro;
      viewDistrict.innerText = 'Bairro: ' + body.bairro;
      viewLocation.innerText = 'Localidade: ' + body.localidade;
      viewDDD.innerText = 'DDD: ' + body.ddd;
    });
}
findBtn.addEventListener("click", findCep);


var json;

async function getInfo(){
    let area = document.getElementById("speakers");
    let data = await fetch('./assets.json');
    json = await data.json();
    console.log(json);
    json.speakers.forEach(element => {
            area.innerHTML += `
            <div class="col-md-6 col-lg-2 pt-5">
                <img data-bs-id = "${element.id}" data-bs-toggle="modal" data-bs-target="#speakersModal" class="rounded img-fluid images-speakers" src="${element.ruta}">
                <h5 class="pt-3">${element.nombre}</h5>
                <h7>${element.cargo}</h7>
            </div>
          `;
    });
}

getInfo();

const exampleModal = document.getElementById('speakersModal')
        exampleModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
  
        const recipient = button.getAttribute('data-bs-id');

        let modalNombre = exampleModal.querySelector('.modal-speaker-nombre');
        let modalCargo = exampleModal.querySelector('.modal-speaker-cargo');
        let modalSemblanza = exampleModal.querySelector('.modal-speaker-semblanza');
        let modalImagen = exampleModal.querySelector('.modal-speaker-imagen');

        
        modalNombre.textContent = `${json.speakers[recipient-1].nombre}`;
        modalCargo.textContent = `${json.speakers[recipient-1].cargo}`;
        modalSemblanza.textContent = `${json.speakers[recipient-1].semblanza}`;
        modalImagen.src = `${json.speakers[recipient-1].ruta}`;
});
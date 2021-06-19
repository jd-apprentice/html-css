const $form = document.querySelector('#form');
const $modal = document.querySelector('#modal11');

function retraso() {
    setTimeout(function(){ $modal.style.display = 'none'; }, 3000);
}

$form.addEventListener('submit', subir);

async function subir(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
    method: this.method, 
    mode: 'no-cors',
    body: form,
    header: {
        'Accept': 'application/json',
        'mode': "no-cors"
        }
    })
    
    if (response.status == 0 ) {
        $modal.style.display = 'flex';
        retraso()
    }
}
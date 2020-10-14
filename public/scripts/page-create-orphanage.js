//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;



//create and add markers
map.on('click', (event)=>{


    const lat= event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

//remove icon
    marker && map.removeLayer(marker)

//add icon layar markers
marker=L.marker([lat, lng], { icon })
.addTo(map);

})


function addPhotoField(){
   //pegar o container de fotos
  const container= document.querySelector('#images')
   //pegar o conteiner para duplicar
   const fieldsContainer=document.querySelectorAll('.new-upload')
   // realizar o clone da imagem
   const newFieldContainer= fieldsContainer[fieldsContainer.length-1].cloneNode(true)
   
    const input =newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    input.value=""

   //limpar o campo
   newFieldContainer.children[0].value= ""
   
   //adicionar o clone ao conteiner
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    const span= event.currentTarget

    const fieldsContainer= document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//select yes or no to
function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')})

        const button=event.currentTarget
        button.classList.add('active')

        const input =document.querySelector('[name="open_on_weekends"]')

        input.value=button.dataset.value


    }
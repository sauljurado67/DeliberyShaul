//------------------ Creamos contenido del menu ----------------------
/* ----------------------- API para el menu --------------------------*/

function menuAPI () {
    
    fetch('/js/api.json')
        .then(response => response.json())
        .then(data => {
            const menu = data;

            const detalle = document.getElementById("detalle");

            for (let i = 0; i < menu.length; i++) {
                const mila = menu[i];
                console.log(menu[i])
                // crear un elemento div para insertar la card
                const div = document.createElement("div");
                const facefront= document.createElement("div");
                const faceback= document.createElement("div");
            
                // agrego estilos y atributos
                div.classList.add("card");
                div.classList.add("show");
                div.classList.add(`${mila.codigo}`);
                div.id = `menu${i +1}`;
                
                detalle.appendChild(div)
                // agrego contenido html al div creado
                const card1 =document.querySelector(`#menu${i +1}`);
                facefront.classList.add("face");
                facefront.classList.add("front");
                faceback.classList.add("face");
                faceback.classList.add("back");
                card1.append(facefront, faceback);
                facefront.innerHTML = `<img src="${mila.imagen}" />
                                    <h3>${mila.nombre}</h3>`;
                faceback.innerHTML = `<h2>${mila.nombre}</h2>
                                        <span>${mila.precio}</span>
                                        <a class="link" href="#">Agregar al <i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>></a>`;
            }
        })
}
menuAPI();


// -------------  codigo de filtrado de nuestro menu --------------------


filterObjects("all");

function filterObjects(c){
    var x, f;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for (f = 0; f < x.length; f++){
        removeClass(x[f], "show");
        if (x[f].className.indexOf(c) > -1) addClass(x[f], "show");
    }
    
}

function addClass(element, name){
    var f, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (f = 0; f < arr2.length; f++){
        if (arr1.indexOf(arr2[f]) == -1){
            element.className += " " + arr2[f];
        }
    }
}

function removeClass(element, name){
    var f, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (f = 0; f < arr2.length; f++){
        while (arr1.indexOf(arr2[f]) > -1){
            arr1.splice(arr1.indexOf(arr2[f]), 1);
        }
    }
    element.className = arr1.join(" ");
}

/* -------- Validacion Login cambio login por usuario -------------- */
let nom = localStorage.getItem('usuario', '')
if (nom == null || nom == ''){
    document.getElementById('log').innerText = 'Login'
} else {
    document.getElementById('log').innerText = nom;
    document.getElementById('log2').innerText = nom;
    document.getElementById('log3').innerText = nom;
    document.getElementById('log').style.backgroundColor = "#a152eb";
}

document.addEventListener('click', () =>{
    let usua = nom;
    if (document.getElementById('log').innerText !== usua){
        const keysToRemove = ['usuario','email','password'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
    } else {
        document.getElementById('log').innerText = nom;
        document.getElementById('log').style.backgroundColor = "#a152eb";
    }
})



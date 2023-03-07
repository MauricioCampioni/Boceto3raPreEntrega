//JSON

let stockProductos=[
{"nombre":"CamisetaTitular","precio":15000,"color":"Azul y amarillo","talle":"M","sexo":"Hombre","img":"RemeraBocaHombre1.jpg"},
{"nombre":"CamisetaSuplente","precio":15000,"color":"Amarillo","talle":"M","sexo":"Hombre y Mujer","img":"RemeraBocaHombre2.jpg"},
{"nombre":"ShortTitular","precio":9500,"color":"Azul","talle":"L","sexo":"Mujer","img":"ShortBoca1.jpg"},
{"nombre":"ShortNiño","precio":6500,"color":"Azul y Amarillo","talle":"XS","sexo":"Niño","img":"ShortBocaNiños1.jpg"},
{"nombre":"BuzoTitular","precio":13500,"color":"Azul","talle":"S","sexo":"Hombre","img":"BuzoBoca.jpg"},
]

let carrito=[];
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}
console.log(carrito);

function agregarAlCarrito(){
    console.log(this.color);
}


stockProductos.forEach(producto => {
    const div= document.createElement("div");


    div.classList.add("Remera");
    
    
    div.innerHTML=`
    <img class="ImagenRemera"src=./assets/img/${producto.img}>
    <h3>${producto.nombre}</h3>
    <h4>${producto.talle}</h4>
    <h4>${producto.sexo}</h4>
    <h4>${producto.precio}</h4>
    <button id=boton_${producto.nombre}>Comprar</button>
    
    `

    let productosDestacados= document.getElementById("ProductosDestacados");
    productosDestacados.append(div);

    let button= document.getElementById(`boton_${producto.nombre}`);
    button.onclick=() => {

    carrito.push(producto);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));    
    }

    
    


});





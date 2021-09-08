//FUNCION READY
$(document).ready(function () {
    if("Carrito" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("Carrito"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.imagen, literal.tipo, literal.categoria, literal.valor, literal.iva, literal.cantidad));
        }
        console.log(carrito);
        carritoUI(carrito);
    }

    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});

//FUNCION LOAD
window.addEventListener('load',()=>{
    $('#loading').delay(400).fadeOut('slow', ()=>{console.log('ELIMINAR SPINNER')});
    //FADE IN PARA MOSTRAR EL CUERPO DE LA PAGINA
    $('#cuerpo').delay(800).fadeIn("slow",()=>{ console.log('BODY CARGADO')});
    //FADE IN MÁS LENTO PARA MOSTRAR EL NOMBRE DEL CLUB
    $('.tituloAparece').delay(3000).fadeIn(1500,()=>{console.log('TITULO APARECE')});
})

//INSTANCIO LOS PRODUCTOS
productos.push(new Producto(1, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/tableta-leche.jpg", "Barra de chocolate con leche", categoria[0], 600, 1.21));
productos.push(new Producto(2, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/trufas-1.jpg", "Caja de trufas con cobertura de chocolate", categoria[1], 700, 1.21));
productos.push(new Producto(3, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/confituras.jpg","Frasco de mermeladas de frambuesa y frutilla", categoria[2], 500, 1.21));
productos.push(new Producto(4, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/alfajores.jpg","Alfajores caseros surtidos", categoria[3], 1000, 1.21));
productos.push(new Producto(5, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/tableta-marroc.jpg","Barra de chocolate marroc", categoria[0], 700, 1.21));
productos.push(new Producto(6, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/chocolate-surtido-1.jpg","Caja de chocolates surtidos", categoria[1], 1300, 1.21));
productos.push(new Producto(7, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/crema-marroc.jpg","Frasco de Crema de marroc", categoria[2], 900, 1.21));
productos.push(new Producto(8, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/turrones.jpg","Turrones bañados en chocolate blanco y negro", categoria[3], 400, 1.21));
productos.push(new Producto(9, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/tableta-blanco.jpg","Barra de chocolate blanco", categoria[0], 700, 1.21));
productos.push(new Producto(10, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/caja-bombones.jpg","Caja de bombones surtidos", categoria[1], 1200, 1.21));
productos.push(new Producto(11, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/nuicciola-1.jpg","Frasco de crema de cacao y avellanas", categoria[2], 1000, 1.21));
productos.push(new Producto(12, "https://chocolatesrapanui.com.ar/wp-content/uploads/2020/07/pailas-1.jpg","Frutos secos bañados en chocolate amargo", categoria[3], 300, 1.21));

//MUESTRO LOS PRODUCTOS POR CONSOLA PARA VERIFICAR FUNCIONAMIENTO DEL ARRAY
for (let producto of productos){
    console.log(producto)
}

//INTEFAZ JQUERY PRODUCTOS
productosUIjQuery(productos, "#productosCards");

//SELECT RENDERIZAR
selectUI(categoria,"#filtroCategorias");

//EVENTOS SELECT
$('#filtroCategorias').change(function (e) { 
    const value = this.value;
    //ANIMACION
    $('#productosCards').fadeOut(600,function(){
        if(value == 'TODOS'){
            productosUIjQuery(productos, '#productosCards');
        }else{
            const filtrados = productos.filter(producto => producto.categoria == value);
            productosUIjQuery(filtrados, '#productosCards');
        }
        //SELECT RENDERIZAR PRODUCTOS
        $('#productosCards').fadeIn();
    });
});



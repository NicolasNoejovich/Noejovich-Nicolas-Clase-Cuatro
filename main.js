
let mail = prompt ("Por favor ingrese su email");
let contraseña = prompt ("ingrese su contraseña");
let celular = prompt ("ingrese su número de telefono");
alert (`Tu sesión se ha iniciado con éxito, bienvenido usuario ${mail}`);

function llevar () {
    let cantidad = prompt (`Si desea llevar una cantidad de productos por mayor ingrese ${1} y si va a comprar por menor ingrese ${2}`);
    if (cantidad == 1){
        alert (`Usted ha seleccionado compra por mayor `)
        alert ("Al llevar mas de 10 productos se le realizara un descuento del 15% del total")
        let productos = prompt (`Que productos desea llevar?`);


    } else if (cantidad > 1){
        alert (`Usted ha seleccionado compra por menor `)
        let productos = prompt (`Que producto desea llevar?`);

    };
    
}

function compraMayor (producto, descuento, iva){
    alert (`En caso de que comprar por mayor el valor de su producto sería de $800 sin incluir el descuento y el iva. `)
    alert (`Presione aceptar para ver el valor total. `)

    let prodcutoConDescuento = (producto * descuento);
    let precio =  producto - (prodcutoConDescuento / iva ) ;
    alert (`${precio}`);
    return precio;
}

function compraMenor (producto, iva){
    alert (`En caso de que comprar por menor el valor de su producto sería de $800 sin incluir el iva. `)
    alert (`Presione aceptar para ver el valor total. `);
    let precio =  producto * iva  ;
    alert (`${precio}`);
    return precio;
}


llevar ();
compraMayor (800, 0.15, 0.21);
compraMenor (800, 0.21);

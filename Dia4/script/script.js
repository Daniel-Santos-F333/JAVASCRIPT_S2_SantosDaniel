let JsonCategorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]

let JsonHamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

let JsonIngredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]

let JsonChefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

function menuPrincipal () {
    let boleano =true 
    while (boleano =true ){let primerMenu = `=============================================
        Sisema Gestión de Inventario
    =============================================
    Seleccione una opción:

    1.Ingredientes
    2.Categorias
    3.Hamburguesas
    4.Chefs
    5.Salir
    =============================================`;

    let opcionUsuario1 = parseInt(prompt (primerMenu));

    if (opcionUsuario1 === 1) {
    menuIngredientes();
    }
    else if(opcionUsuario1 === 2) { 
    menuCategorias()
    }
    else if (opcionUsuario1 === 3) {
    menuHamburguesas()
    }
    else if (opcionUsuario1 === 4) {
    menuChefs()
    }
    else if (opcionUsuario1 === 5) {
        boleano=false
        alert("Saliendo...")
    }
    else {
    alert("Verifique la opción ingresada")
    
}
}}
    

function menuIngredientes () {
    let segundoMenu = `=============================================
                                        Ingredientes
=============================================
Seleccione una opción:

1.Registrar nuevo ingrediente
2.Visualizar ingredientes
3.Actualizar ingrediente
4.Eliminar ingrediente
5.Volver al menu principal
=============================================`;

let opcionUsuario2 = parseInt(prompt(segundoMenu));
if (opcionUsuario2 === 1) {}
else if (opcionUsuario2 === 2) {}
else if (opcionUsuario2 === 3) {}
else if (opcionUsuario2 === 4) {}
else if (opcionUsuario2 === 5) {
    menuPrincipal()
}
}

function menuCategorias () {
    let tercerMenu = `=============================================
                                        Categorias
=============================================
Seleccione una opción:

1.Registrar nueva categoria
2.Visualizar categorias
3.Actualizar categoria
4.Eliminar categoria
5.Volver al menu principal
=============================================`;

let opcionUsuario3 = parseInt(prompt(tercerMenu))
if (opcionUsuario3 === 1) {}
else if (opcionUsuario3 === 2) {}
else if (opcionUsuario3 === 3) {}
else if (opcionUsuario3 === 4) {}
else if (opcionUsuario3 === 5) {
    menuPrincipal()
}
}

function menuHamburguesas () {
    let cuartoMenu = `=============================================
                                    Hamburguesas
=============================================
Seleccione una opción:

1.registrar nueva hamburguesa
2.Visualizar hambrguesas
3.Actualizar hamburguesa
4.Eliminar hamburguesa
5.Volver al menu principal
=============================================`;

let opcionUsuario4 = parseInt(prompt(cuartoMenu))
if (opcionUsuario4 === 1) {}
else if (opcionUsuario4 === 2) {}
else if (opcionUsuario4 === 3) {}
else if (opcionUsuario4 === 4) {}
else if (opcionUsuario4 === 5) {
    menuPrincipal()
}
}

function menuChefs () {
    let quintoMenu = `=============================================
                                            Chefs
=============================================
Seleccione una opción:

1.registrar nuevo chef
2.Visualizar chefs
3.Actualizar chef
4.Eliminar chef
5.Volver al menu principal
=============================================`;

let opcionUsuario5 = parseInt(prompt(quintoMenu))
if (opcionUsuario5 === 1) {}
else if (opcionUsuario5 === 2) {}
else if (opcionUsuario5 === 3) {}
else if (opcionUsuario5 === 4) {}
else if (opcionUsuario5 === 5) {
    menuPrincipal()
}
}

menuPrincipal()
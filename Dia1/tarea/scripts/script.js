function mostrarMenuPrincipal() {
    let Menu1 = `=============================================
                            Simulador de Gasto Diario
=============================================
Seleccione una opción:

1.Registrar nuevo gasto
2.Listar gastos
3.Calcular total de gastos
4.Generar reporte de gastos
5.Salir
=============================================`;
    let opcionMenu1 = prompt(Menu1);

    if (opcionMenu1 === 1) {
        mostrarMenuRegistro()
    }
}

function registroGasto() {

let gastoRegistro = `=============================================
                                Registrar Nuevo Gasto
=============================================
Ingrese la información del gasto:

Monto del gasto:
=============================================`;
let monto = prompt(gastoRegistro);

let categoriaRegistro = `=============================================
Registrar Nuevo Gasto
=============================================
Ingrese la información del gasto:

Categoría (ej. comida, transporte, entretenimiento, otros):
=============================================`;
let categoria = prompt(categoriaRegistro);

let descripcionRegistro = `=============================================
Registrar Nuevo Gasto
=============================================
Ingrese la información del gasto:

Descripción (Opcional):
=============================================`;

let descripcion = prompt(descripcionRegistro);

let datosRegistrados = { "monto": monto, "categoria": categoria, "descripcion": descripcion
}

registroGastos.push(datosRegistrados)
}

console.table(registroGastos);

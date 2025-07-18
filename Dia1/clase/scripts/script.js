// ########################
// ######   DIA 1 #########
// ########################

// ¡¡¡Primer comando!!!
console.log("Hola Mundo! Pillen este número: ", 3+3+3+3+3+3);
variable1= 3.14;
console.log(variable1);
variable2= "Danielito";
console.log(typeof variable2);
console.log(typeof (variable1));
palabra1="Campus";
palabra2="Lands";
palabra3= (palabra1 + palabra2);
console.log(palabra3);

nombrePersona= "Carlitos Draktar";
plataActual= 55000;
console.log("El usuario",nombrePersona,"tiene en su cuenta bancaria",plataActual,"pesos colombianos!.");

// Booleanos
booleanito1=true;
booleanito2=false;
console.log(typeof booleanito1);

//Condicionales
if(booleanito1 == true){
    console.log("Es verdadero!")
} else{
    console.log("No es verdadero :(")
}

//Funciones
function funcionsita(fahrenheit) {
    return(5/9) * (fahrenheit-32);
}

let celsiu= funcionsita(200);
console.log("La temperatura en celsius es:",celsiu);

// Desarrollado por: Daniel Santos - C.C: 1.005.331.246
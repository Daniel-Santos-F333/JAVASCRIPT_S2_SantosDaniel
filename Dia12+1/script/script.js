function buscarPersonaje(){
    const xhr = new XMLHttpRequest();//La importación del XML
    const url = `https://superheroapi.com/api/d06a1eed9609907355d3784fbcb24fb0/search/${nombreUsar}`;//Acento Inverso ```
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState===3){
            
            alert("Cargando...")
        }
        else if(xhr.readyState===4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText);
                alert("The character is: Name:"+daticos["results"][0]["name"]+" Status:"+daticos["results"][0]["status"]+ " Specie:"+daticos["results"][0]["species"]);
            }
            catch(err){
                console.log(err.message); //Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}

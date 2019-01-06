const promesa = new Promise( (resolve, reject) => {
    //las promesas se reciben con ficheros de ajax
    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve();
        }else{
            reject();
        }
    },3000);
});


// si la promesa se cumple usa then
promesa.then(()=>{
    alert('Exito');
});

//si la promesa no se cumple usa catch
promesa.catch(()=>{
    alert('No exitosa');
});
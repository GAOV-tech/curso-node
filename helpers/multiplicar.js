const fs = require('fs');


const crearArchivo =(base=5,listar=false,hasta=10)=>{


  return new Promise((resolve,reject)=>{
if(listar){
      console.log('===============');
    console.log('Tabla del 5:',base);
    console.log("===============");
}


 let salida='';
 
 for(let i=1;i<=hasta;i++){
    
    salida += `${i} x ${base} = ${i*base}\n`;
        }
        if(listar){
          console.log('===============');
          console.log('Tabla del 5:',base);
          console.log("===============");
          console.log(salida);
      }


  
       fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        

         resolve(`tabla-${base}.txt creado`);
})
}
module.exports ={
    crearArchivo
}

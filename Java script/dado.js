function dado(){

    min = Math.ceil(1); // 1
    max = Math.floor(21);// 21
    numero = Math.floor(Math.random() * (max - min) + min);

    console.log(numero)
}

dado()
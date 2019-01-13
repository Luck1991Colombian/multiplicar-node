const fs = require('fs');

const colors = require('colors');

/*
let crearAchivo = async base => {
    if (!Number(base)) {
        throw new Error(`${base} no es un valor númerico`);
    }
    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i} \n `;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new Error(`No se pudo crear el archivo ${err}`)
    });
    return (`tabla-${base}.txt`);
}
*/

let crearAchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) reject(`Deben ser valores númericos`);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject('No se pudo crear el archivo');
            else resolve('El archivo ' + `tabla-${base}.txt`.red + ' se creo de manera correcta');
        });

    });
}


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) reject('Ambos valores deben ser númericos');

        console.log('----------------------'.green);
        console.log(`----- Tabla de ${base} -----`.green);
        console.log('----------------------'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${i} X ${base} = ${i*base}`);
        }

        console.log('----------------------'.green);

    });
};

module.exports = {
    crearAchivo,
    listarTabla
}
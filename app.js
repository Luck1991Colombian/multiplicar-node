const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearAchivo(argv.base, argv.limite)
            .then(archivo => console.log(`se creo el archivo ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}

//console.log(process.argv);


//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1];
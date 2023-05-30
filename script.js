const fs = require('fs')
const path = require('path')
const departamentos = require('./src/departamentos.json')

  const mainDir = path.join(process.cwd(), `public/deptos`);


  const imageDir = fs.readdirSync(mainDir);

    for (let i = 0; i < imageDir.length; i++) {
        const e = fs.readdirSync(`${mainDir}/${imageDir[i]}`);
        console.log(e);
        departamentos[i].images = e;
    }


    console.log(departamentos);


    fs.writeFileSync('./src/departamentos.json', JSON.stringify(departamentos))
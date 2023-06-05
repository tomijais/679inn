const fs = require('fs')
const path = require('path')
const departamentos = require('./src/departamentos.json')

const mainDir = path.join(process.cwd(), `public/deptos`);


const imageDir = fs.readdirSync(mainDir);

for (let i = 0; i < imageDir.length; i++) {
  const e = fs.readdirSync(`${mainDir}/${imageDir[i]}`);
  console.log(e);
  departamentos[i].images = e;
  departamentos[i].price = `$${Math.floor(Math.random() * 10000).toLocaleString("de-DE")}`;
  departamentos[i].price2 = `$${Math.floor(Math.random() * 10000).toLocaleString("de-DE")}`;
  departamentos[i].price3 = `$${Math.floor(Math.random() * 10000).toLocaleString("de-DE")}`;

}


console.log(departamentos);


fs.writeFileSync('./src/departamentos.json', JSON.stringify(departamentos))
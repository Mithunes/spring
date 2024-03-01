const fs = require('fs')

/**
 * Run time environment for JavaScript
 * Server side language
 * yarn, npm - Node Package Manager
 */
/**
 * node <filename>.<extension>
 * npx nodemon <filename>.<extension>
 * 
 * npm install <package_name> / npm i <package_name>
 * npm uninstall <package_name>
 * npm install <package_name> --save-dev
 * npm init
 * npm init -y
 */

console.log('hello')

/**
 * serealize - JSON.stringify()
 * deserealize - JSON.parse()
 */

/**
 * readFileSync
 * const file = fs.readFileSync('./data.json')
 * const data = JSON.parse(file)
 * console.log(file)
 * console.log(data)
 */

/**
 * readFile
 * fs.readFile('./data.json', function(error, file) {
 *  const data = JSON.parse(file)
 *  console.log(data)
 * })
 */
data ["rating"]=3.8
fs.writeFileSync('./data.json',JSON.stringfly(data))
 console.log('success')
console.log("") 

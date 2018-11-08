'use strict'

/**
 * @author JLF
 * @author Rics
 */

let ip
let mask
let subnet
let decimalNewMask
let binaryMask
let wildcard
let hosts
let available
let maskUser

/**
	* displays error message 
	*
	*/
function error(message) {
	alert('Error: ' + message)
	document.querySelector('.info').innerHTML = ''
  document.getElementById('table').style.visibility = 'hidden'
  throw new Error("Torpe")
}

/**
 * returns array of size 32
 */
function getBinaryMask(decimal) {
	let arr = []
	for(let i = 0; i < 32; i++) {
		arr[i] = i < decimal ? 1 : 0
	}
	return arr 
} 

/**
 * returns array of size 4 
 */
function getDecimalMask(binary) {
	let decimal = [0, 0, 0, 0]
	let str = '' 
	let index = 0
	for(let i of binary) {
		str += i === 0 ? '0' : '1'
		if(str.length === 8) {
			decimal[index++] = parseInt(str, 2)
			str = ''
		}
	}
	return decimal 
} 
	
function getNewMask(mask, subnet) {
	let n = 0
	while((Math.pow(2, n)) < subnet) {
		n++
	}
	let addMask = n
	if(mask + addMask > 32) {
		error('No se pueden crear las subredes con esta configuracion')
	} 
	available = addMask 
	return mask + addMask
}

function getWildCard(decimalArr) {
	return 256 - decimalArr[decimalArr.length-1]
}

function getHosts(binaryMask) {
	let m = 0
	binaryMask.forEach(i => {
		if (i === 0) m += 1 
	})
	return Math.pow(2, m) - 2 
}

document.getElementById('submit').addEventListener('click', function(){
  ip = document.getElementById('ip').value
  mask = Number(document.getElementById('mask').value)
  maskUser = mask
  subnet = Number(document.getElementById('subnet').value)
  decimalNewMask = getNewMask(mask, subnet)
  binaryMask = getBinaryMask(mask)
  // returns array of size 32
  wildcard = getWildCard(getDecimalMask(getBinaryMask(decimalNewMask)))
  hosts = getHosts(getBinaryMask(decimalNewMask))
  debugger
  document.getElementById('table').style.visibility = 'visible'
  appendToDocument()
})

function appendToDocument() {
	mask = getDecimalMask(binaryMask)
	let e = document.querySelector('.info')
	e.innerHTML = ''
	let f = document.querySelector('.table-body')
	f.innerHTML = ''
	e.innerHTML = e.innerHTML + 
		'Direccion IP: ' + ip + 
		'<br/> Máscara: ' + mask[0] + '.' + mask[1] + '.' + mask[2] + '.' + mask[3] +
		'<br/> Wildcard: ' + (255 - mask[0]) + '.' + (255 - mask[1]) + '.' + (255 - mask[2]) + '.' + (255 - mask[3])
	generaSubredes()

}

function generaSubredes() {
	//Obtaining ip address
	let rows = []
	ip = ip.split('.')
	let ipArr = []
	let ipString = ''
	ip.forEach((i, index) => {
		ipArr[index] = ('00000000' + Number(i).toString(2)).slice(-8)
		ipString += ('00000000' + Number(i).toString(2)).slice(-8)
	})

	// Limpio IP
	ipString = (ipString.slice(0, maskUser) + '00000000000000000000000000000000').slice(0,32)
	console.log(ipString.length)

	for(let i = 0; i < Math.pow(2, available) ; i++) {
		let obj = {}
		let binarioActual = ("00000000" + i.toString(2)).slice(-available) //se genera 000, 001, 010, 011
		// let binarioActual = '***'
		console.log(binarioActual)
		ipString = ipString.slice(0, maskUser) + binarioActual + ipString.slice(maskUser + available) //sustituyendo POR CADA VALOR
		let a = ipString.slice(0, 8)
		let b = ipString.slice(8, 16)
		let c = ipString.slice(16, 24)
		let d = ipString.slice(24)
		debugger
		obj.segmento = parseInt(a, 2) + '.' + parseInt(b, 2) + '.' + parseInt(c, 2) + '.' + parseInt(d, 2)
		
		let ipinicio = parseInt(ipString, 2) + 1
		ipinicio = ("00000000000000000000000000000000" + ipinicio.toString(2)).slice(-32)
		a = ipinicio.slice(0, 8)
		b = ipinicio.slice(8, 16)
		c = ipinicio.slice(16, 24)
		d = ipinicio.slice(24)
		obj.ipinicio = parseInt(a, 2) + '.' + parseInt(b, 2) + '.' + parseInt(c, 2) + '.' + parseInt(d, 2)

		let ipfinal = parseInt(ipString, 2) + hosts /* 							IMPORTANT 					*/
		ipfinal = ("00000000000000000000000000000000" + ipfinal.toString(2)).slice(-32)
		a = ipfinal.slice(0, 8)
		b = ipfinal.slice(8, 16)
		c = ipfinal.slice(16, 24)
		d = ipfinal.slice(24)
		obj.ipfinal = parseInt(a, 2) + '.' + parseInt(b, 2) + '.' + parseInt(c, 2) + '.' + parseInt(d, 2)

		let broadcast = parseInt(ipString, 2) + hosts + 1      /*** OTRO importante ***/
		broadcast = ("00000000000000000000000000000000" + broadcast.toString(2)).slice(-32)
		a = broadcast.slice(0, 8)
		b = broadcast.slice(8, 16)
		c = broadcast.slice(16, 24)
		d = broadcast.slice(24)
		obj.broadcast = parseInt(a, 2) + '.' + parseInt(b, 2) + '.' + parseInt(c, 2) + '.' + parseInt(d, 2)

		obj.hosts = hosts
		let m = getDecimalMask(getBinaryMask(decimalNewMask))
		obj.mascara = m[0] + '.' + m[1] + '.' + m[2] + '.' + m[3]
		rows.push(obj)
	}

	rows.forEach((r, i) => {
		if (i < subnet) appendRow(r)
	})

}

function appendRow(obj) {
	let e = document.querySelector('.table-body')
	e.innerHTML = e.innerHTML + 
		`<tr>
      <th>` + obj.segmento	+ `</th>
      <td>` + obj.ipinicio	+ `</td>
      <td>` + obj.ipfinal		+ `</td>
      <td>` + obj.broadcast	+ `</td>
      <td>` + obj.hosts 		+ `</td>
      <td>` + obj.mascara 	+ `</td>
    </tr>`
}
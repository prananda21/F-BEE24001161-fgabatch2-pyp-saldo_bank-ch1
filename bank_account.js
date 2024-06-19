let saldo = 0;

function tampilSaldo() {
	alert(`Saldo saat ini: ${saldo}`);
}

function tambahSaldo() {
	let num = parseInt(prompt(`Saldo saat ini ${saldo} \nMasukkan saldo : `));
	if (num) {
		let result = (saldo += num);
		alert(`Saldo kamu saat ini : Rp ${result}`);
	} else {
		alert("Kamu belum memasukkan saldo");
	}
	return saldo;
}

function kurangSaldo() {
	let num = parseInt(prompt(`Saldo saat ini ${saldo} \nMasukkan saldo : `));
	if (num) {
		let result = (saldo -= num);
		alert(`Saldo kamu saat ini : Rp ${result}`);
	} else {
		alert("Kamu belum memasukkan saldo");
	}
	return saldo;
}

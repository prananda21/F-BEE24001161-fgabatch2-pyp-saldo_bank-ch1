let saldo = 0;

function tampilSaldo() {
	alert(`Saldo saat ini: ${saldo}`);
	return saldo;
}

function tambahSaldo() {
	let num = parseInt(prompt(`Saldo saat ini ${saldo} \nMasukkan saldo : `));
	if (num) {
		let result = (saldo += num);
		alert(`Saldo kamu saat ini : Rp ${result}`);
	} else {
		alert("Input tidak valid!");
	}
	return saldo;
}

function kurangSaldo() {
	let num = parseInt(prompt(`Saldo saat ini ${saldo} \nMasukkan saldo : `));
	if (num) {
		if (num > saldo) {
			alert("Saldo tidak mencukupi");
			return saldo;
		} else {
			let result = (saldo -= num);
			alert(`Saldo kamu saat ini : Rp ${result}`);
		}
	} else {
		alert("Input tidak valid!");
	}
	return saldo;
}

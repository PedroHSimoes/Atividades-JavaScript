const calcular = document.getElementById('calcular');

function equacao() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const resultado = document.getElementById('resultado');

    let b2 = b * b;

    console.log(b2);

    let delta = b2 - 4 * a * c;

    console.log(delta);

    if (delta < 0) {
        resultado.textContent = ("Não é possível calcular pois o Delta é menor que zero.");
    }

    if (delta == 0) {
        resultado.textContent = ("O Delta é zero, portando os valores de X1 e X2 serão iguais.");
    }

    let valordebneg = b * (-1);

    let raizdelta = Math.sqrt(delta);

    let x1 = (valordebneg + raizdelta) / 2 * a;

    let x2 = (valordebneg - raizdelta) / 2 * a;
    resultado.textContent = `O valor de X1 = ${x1.toFixed(2)} e X2 = ${x2.toFixed(2)}`;
}
calcular.addEventListener('click', equacao);
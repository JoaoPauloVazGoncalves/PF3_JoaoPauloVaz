const calcular = document.getElementById('calcular');

function calculadora () {
    
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('ValorMensal').value;
    const juros = document.getElementById('Juros').value;
    const parcelas = document.getElementById('Parcelas').value;

    const resultado = document.getElementById('result');

    if (parcelas !== ''  && juros !== '' && parcelas !=='' && nome !=='') {
            const i = (juros/100)
            const VF = valor*(((1+i)**parcelas-1)/i)
            const VFR = VF.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
            const PR = p.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

            resultado.textContent = `${nome}, se você aplicar ${PR}, a taxa de juros de ${juros}% ao mês duante ${n} meses, acumulará uma poupança de ${VFR}`            
    }else {
        resultado.textContent = 'Preencha todos os campos.';
    }
}
calcular.addEventListener('click', calculadora);
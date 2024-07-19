function calcular(){
    const valor1 = document.getElementById('value1').value;
    const valor2 = document.getElementById('value2').value;
    const operacao = document.getElementById('operacao').value;
    let resultado;


    if (valor1 === "" || valor2 === "") {
        alert("Preencha os campos");
    } else {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        switch(operacao) {
            case 'soma':
                resultado = num1 + num2;
                break;
            case 'sub':
                resultado = num1 - num2;
                break;
            case 'divisao': 
            if(num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por 0"
            }
                break;
            case 'multi':
                resultado = num1 * num2;
                break;  
              default: 
              resultado = 'Operação inválida'
    }
    

    
        
    }
   document.getElementById('resultado').textContent = `O Resultado da operação é igual a ${resultado}` ;
}
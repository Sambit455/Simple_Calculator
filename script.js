(function(){
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const addBtn = document.getElementById('add-btn');
    const subBtn = document.getElementById('sub-btn');
    const mulBtn = document.getElementById('mul-btn');
    const divBtn = document.getElementById('div-btn');
    const resultPara = document.getElementById('result');

    addBtn.addEventListener('click',function(){
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 + num2;
      resultPara.textContent = (`Result: ${result}`);
    })

    subBtn.addEventListener('click',function(){
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 - num2;
      resultPara.textContent = (`Result: ${result}`);
    })

    mulBtn.addEventListener('click',function(){
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const result = num1 * num2;
      resultPara.textContent = (`Result: ${result}`);
    })

    divBtn.addEventListener('click',function(){
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      if(num2!==0){
        const result = num1 / num2;
        resultPara.textContent = (`Result: ${result}`);
      }else{
        resultPara.textContent = 'Error: Division by zero!';
      }
    });
})();
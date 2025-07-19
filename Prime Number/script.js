document.getElementById('primeForm').addEventListener('submit',function(event){

    event.preventDefault();

    // get input 
    const getInput = parseInt(document.getElementById('numberInput').value);

    let isPrime =  true;

    if(getInput <= 1){
        isPrime = false;
    }else{
        for(i = 2; i <=Math.sqrt(getInput);i++){
            if(getInput % i === 0 ){
                isPrime = false;
                break;
            }
        }
    }
    const show = document.getElementById('result');
    if(isPrime){
        show.innerText = getInput + " is a prime number";
    }else{
        show.innerText = getInput + " is not a prime number";
    }
});
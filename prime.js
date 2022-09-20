function chkprime(num){
    let fac=0;
    for(let a=0;a<=num;a++){
        if(num%a==0){
            fac++;
        }
    }
    if (fac==2){
        return true;
    }
    return false;
}


let answer=chkprime(29);

console.log(answer);
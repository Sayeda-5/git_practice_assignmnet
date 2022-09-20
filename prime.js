function chkprime(number){
    let factor=0;
    for(let a=0;a<=number;a++){
        if(number%a==0){
            factor++;
        }
    }
    if (factor==2){
        return true;
    }
    return false;
}


let answer=chkprime(29);

console.log(answer);

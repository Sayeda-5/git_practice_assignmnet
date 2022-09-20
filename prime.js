function chkprime(number){
    let fac=0;
    for(let a=0;a<=number;a++){
        if(number%a==0){
            fac++;
        }
    }
    if (fac==2){
        return true;
    }
    return false;
}


let ans=chkprime(29);

console.log(ans);

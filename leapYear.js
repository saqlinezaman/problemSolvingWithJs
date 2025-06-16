leapYear=(year)=>{
if(year % 100 !== 0  && year  % 4 === 0  || year % 400 ===0  ){
    console.log('This is a Leapyear✌️✌️');
}else{
    console.log('This is not a Leapyear:👎👎');
}
}
leapYear(2064);
const students = [
    'karim',
    'rahim',
    'monir',
    'rahim',
    'selim',
    'monir'
];
noDuplicate=(array)=>{
    const unique = []; 
    for(const item of array){
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    return unique;
};
const uniqueArray = noDuplicate(students);
console.log(uniqueArray);
function woodQuantity(chairQunatity, tableQuantity, bedQuantitiy){
    const perChairWood = 3 ;
    const perTableWood = 10 ;
    const perBedWood = 50 ;
    const chairTotalWood = perChairWood * chairQunatity;
    const tableTotalWood = perTableWood * tableQuantity;
    const bedTotalWood = perTableWood * bedQuantitiy;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return  totalWood;
}
    const wood = woodQuantity(2,1,5);
    console.log(wood);
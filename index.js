// Code your solution here
const drivers = ['Mfalme', 'Dre', 'Phill', 'Doreen', 'Terry', 'Mfalme']
function findMatching (drivers, string){
    return drivers.filter((driver1)=> driver1.toUpperCase()===string.toUpperCase());
}

function fuzzyMatch (drivers, string){
    return drivers.filter((driver1)=> driver1.toUpperCase().indexOf(string.toUpperCase()) ===0);
}

function matchName(driver, string){
    return driver.filter((driver2)=> driver2.name===string);
}
function findMatching(drivers, name){
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.startsWith(name[0]))
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}
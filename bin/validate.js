const checkExists = (searchArray, searchId) =>{
    let result = false;

        searchArray.some(item => 
        {
            if(item.id === searchId){
                result = true;
            }
        })   
    return result;
}

const checkAnyExists = (searchArray, searchItem) => {
    let result = false;
    searchItem.map(item => {
        searchArray.some(search => 
        {
            if(search.id === item.id){
                result = true;
                return;
            }
        })
    })
    return result;
}

module.exports = {
    checkExists, checkAnyExists
}
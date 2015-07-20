var countries = [{
    name: "ukraine",
    description: "1st"
},
{
    name: "usa",
    description: "2nd"
},
{
    name: "france",
    description: "3rd"
}];

var hotels = [{
    id: 1,
    name: "opera",
    country: "ukraine",
    description: "hotel"
},
{
    id: 2,
    name: "reviera",
    country: "usa",
    description: "motel"
},
{
    id: 3,
    name: "victoria",
    country: "france",
    description: "mini-hotel"
}];

//Получить список стран
module.exports.getCountries = function() {
    return countries;
};
//Получить список отелей в стране
module.exports.getHotelsInCountry = function(countryName){
    var array = [];
    for (var i in hotels){
        if(hotels[i].country === countryName){
            array.push(hotels[i]);
        }
    }
    return array;
};
//Добавить страну
module.exports.addCountry = function(countryName, countryDescription) {
    countries.push({ name: countryName,
                     description: countryDescription
                  });       
};
//Добавить отель в страну
module.exports.addHotelInCountry = function(countryName, hotelName, hotelDescription) {
    var hotelId = hotels.length +1;

    hotels.push({ id: hotelId,
                  country: countryName,
                  name: hotelName,
                  description: hotelDescription
                });       
};
//Удалить определенный отель
module.exports.deleteHotelById = function(hotelId) {
    for (var i in hotels) {
        if (hotels[i].id === hotelId) {
            hotels.splice(i, 1);
            break;
        }
    }        
};
//Получить информацию об определенном отеле
module.exports.getHotelById = function(hotelId){
    for (var i in hotels) {
        if (hotels[i].id === hotelId) {
            return hotels[i];
        }
    }
};
//Обновить информацию об определенном отеле
module.exports.updateHotelById = function(hotelId, countryName, hotelName, hotelDescription) {
    for (var i in hotels) {
        if (hotels[i].id === hotelId) {
            hotels[i].country = countryName;
            hotels[i].name = hotelName;
            hotels[i].description = hotelDescription;
            break;
        }
    }          
};
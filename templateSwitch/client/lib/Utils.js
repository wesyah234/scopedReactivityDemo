Seed = {};

Seed.go = function() {
  Meteor.call('removeAll');

  var seed = [{name: "Chinese", phone: "111-1111", status: "*", address:{street:"123 main",city:"New York", state:"NY"}},
    {name: "Japanese", phone: "222-1111", status: "**", address:{street:"123 Second St",city:"Madison", state:"WI"}},
    {name: "Thai", phone: "333-1111", status: "***", address:{street:"33 Oakdale Road",city:"Miami", state:"FL"}},
    {name: "Indonesian", phone: "444-1111", status: "****", address:{street:"12 County Road X",city:"New York", state:"NY"}},
    {name: "Italian", phone: "555-1111", status: "*****", address:{street:"3 First St",city:"Denver", state:"CO"}}];

  var arrayLength = seed.length;
  for (var i = 0; i < arrayLength; i++) {
    Meteor.call('addRestaurant', seed[i]);
  }

};

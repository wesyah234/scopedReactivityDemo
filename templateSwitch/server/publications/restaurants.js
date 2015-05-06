Meteor.publish("restaurant", function(id) {
  // this is the "detail" publication , which pulls either the full address sub element, or selected additional fields
  // of the address that weren't already pulled by the restaurants publication below
  return Restaurants.find({_id: id}, {fields: {_id: 1, name: 1, phone: 1, status: 1, "address.state":1}});
//  return Restaurants.find({_id: id}, {fields: {_id: 1, name: 1, phone: 1, status: 1, "address":1}});
});

Meteor.publish("restaurants", function() {
  // Case #1: if I do not pull the address field in the restaurants publication, then I am able to 
  // pull the address field as an "additional field" in the restaurant (detail) publication above
  // or even, just one sub element of the address (address.state for example)
  return Restaurants.find({}, {sort: {"status": 1}, fields: {_id: 1, name: 1}});
  
  // Case #2: however, the problem starts when I want to pull say, one field from the address (the city)
  // to be displayed first, then when drilling into more detail, I want to get the full address element 
  // or even, just selected sub elements of the address (address.state for example)
//  return Restaurants.find({}, {sort: {"status": 1}, fields: {_id: 1, name: 1, "address.city":1}});
  
  // once you pull a subset of fields from a nested element, Meteor will refuse to pull any more fields from that same nested element
  // this is poorly explained in the docs, and it catches many people, including those trying to help someone 
  // who is experiencing this limitation for the first time!
  
});


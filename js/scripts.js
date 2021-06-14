// //business logic for placesVisited
// function PlacesVisited() {
//   this.places {};
//   this.currentId = 0;
// }

// PlacesVisited.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// PlacesVisited.prototype.addPlace = function(place) {
//   place.placeId = this.assignId();
//   this.place[place.placeId] = place;
// }

// // Business logic for places
// function Place(cityName, countryName, landmarks, timeOfVisit, notes) {
//   this.cityName= cityName;
//   this.countryName = countryName;
//   this.landmarks = landmarks;
//   this.timeOfVisit = timeOfVisit;
//   this.notes = notes;
// }

// Place.prototype.getLocation = function() {
//   return this.cityName + ", " + this.countryName;
// }

// Place.prototype.getJournal = function() {
//   return this.timeOfVisit + ": " + this.notes; 
// }

// Place.prototype.showAll = function() {
//   return ["location: " + this.getLocation(), "Landmarks - " + this.landmarks, "Journal: " + this.getJournal()];
// }



// //Business logic for places
// function Places(location, landmark, timeOfYear) {
//   this.location = location;
//   this.landmark = landmark;
//   this.timeOfYear = timeOfYear;
// }

// Places.prototype.activity = function() {
//   if (this.timeOfYear === "Summer") {
//     return this.timeOfYear + " wow, we actually have sun";
//   } else if (this.timeOfYear === "Fall" || this.timeOfYear === "Autumn") {
//     return this.timeOfYear + " it's time to sleep";
//   } else if (this.timeOfYear === "Winter") {
//     return this.timeOfYear + " time to snowboard"; 
//   } else {
//     return this.timeOfYear + " it's time to procreate";
//   }  
// }

// let portland = new Places("Portland", "Mount Tabor", "Summer");

//Business Logic
function Chocolate(size, nuts) {
  this.size = size;
  this.nuts = nuts;
  this.price = 0;
}
Chocolate.prototype.calculateSize = function(size) {
  if (this.size === "small") {
    this.price += 1;
    //let price = price + 1
  } else if (this.size === "medium") {
    this.price += 2;
    //let price = price + 2
  } else {
    this.price += 3;
    //let price = price + 3
  }
}
// Chocolate.prototype.calculateNuts = function(nuts) {  
//   if (this.nuts === "hazelnuts") {
//     this.price += 1;
//   } else if (this.nuts === "almonds") {
//     this.price += 2;
//   } else {
//     this.price += 3;
//   }
Chocolate.prototype.calculateNuts = function(nuts) {
  for (let i= 0; i < this.nuts.length; i++) {
    this.price += 2;
  }
};

//UI Logic
$(document).ready(function() {
  $("form#choco-form").submit(function(event) {
    event.preventDefault();

    let sizeOption = $("input:radio[name=size]:checked").val();
    let nutOption = $("input:checkbox[name=nuts]:checked");
    let chocoArray = [];
    nutOption.each(function() {
      chocoArray.push($(this).val());  
    })

    let chocolateBar = new Chocolate(sizeOption, chocoArray);
    chocolateBar.calculateSize();
    chocolateBar.calculateNuts();

    $("#orderConfirm").show();
    $("#sizeOption").text(chocolateBar.size);

    let chocoString = (chocolateBar.nuts).join(", ");
    $("#nutOption").text(chocoString);
    $("#costOutput").text("$" + chocolateBar.price);

  })
});



















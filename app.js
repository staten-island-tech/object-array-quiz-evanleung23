const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrats = presidents.filter(function (president) {
  if (president.party === "D") {
    return true;
  } else {
    return false;
  }
});

console.table(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTermRepublicans = presidents.filter(function (president) {
  if (president.terms === 1) {
    if (president.party === "R") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});

console.table(oneTermRepublicans);

//3) return only the last three presidents
const lastPresidents = presidents.filter((president) => president.index > 8);

console.log(lastPresidents);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermDemocrats = presidents.filter(function (president) {
  if (president.terms === 2) {
    if (president.party === "D") {
      return true;
    } else false;
  } else false;
});

console.table(twoTermDemocrats);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const lbjPresidency = presidents.findIndex(function (president) {
  if (president.name === "Lyndon Johnson") {
    if (president.terms === 2) {
      console.log("LBJ served two terms");
    } else {
      console.log("LBJ was one and done");
    }
  } else {
    return false;
  }
});

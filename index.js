
// Fruits, Vegs and flowers in storage arrays

const fruits = ["apple", "orange", "banana", "pear", "grape", "mango", "lemon", "jackfruit", "plum", "apricot"];

const vegs = ["carrot", "turnip", "pumpkin", "bitterguard", "tomato", "ladyfinger", "beans", "cauliflower", "cabbage", "onion"];

const flowers = ["rose", "jasmine", "lily", "daffodile", "sunflower", "tulip", "lavender", "orchid", "iris", "violet"]

// put everything together...
let combined = [...fruits, ...vegs, ...flowers];
combined.sort();
length = combined.length;
let paddedArr = [];

secondtable = document.getElementById("secondTable");

const findDuplicate = [];
// First Row..
for (let i = 1; i <= 3; i++) {
    index = Math.floor(Math.random() * (length - 1)) + 1;
    //    temp += combined[index] + ' ' +`\n`;
    if (!findDuplicate.includes(combined[index])) {
        findDuplicate.push(combined[index]);

    } else {
        i = i - 1;
        continue;
    }

    padded = combined[index].padEnd(15, ".");
    paddedArr[i - 1] = padded;

}

secTable(paddedArr);
// Second Row....
for (let i = 1; i <= 3; i++) {
    index = Math.floor(Math.random() * (length - 1)) + 1;
    /// test for duplicate
    if (!findDuplicate.includes(combined[index])) {
        findDuplicate.push(combined[index]);
        //    console.log(findDuplicate);
    } else {
        i = i - 1;
        continue;
    }

    padded = combined[index].padEnd(15, ".");
    //  display2Id.textContent += padded;
    paddedArr[i - 1] = padded;

}

secTable(paddedArr);
// Third row...
for (let i = 1; i <= 3; i++) {
    index = Math.floor(Math.random() * (length - 1)) + 1;
    /// test for duplicate
    if (!findDuplicate.includes(combined[index])) {
        findDuplicate.push(combined[index]);
        //  console.log(findDuplicate);
    } else {
        i = i - 1;
        continue;
    }
    ///
    padded = combined[index].padEnd(15, ".");
    //   display3Id.textContent += padded;
    paddedArr[i - 1] = padded;

}

secTable(paddedArr);
////////////////////////

function secTable(paddedArr) {
    //  len = paddedArr.length;

    row = secondtable.insertRow(-1);
    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);

    cell0.innerHTML = paddedArr[0];
    cell1.innerHTML = paddedArr[1];
    cell2.innerHTML = paddedArr[2];

}


let selectedList = [];
const result = document.getElementById('result');
const table = document.getElementById('myTable');


// put everything together...
//let combined = [...fruits, ...vegs, ...flowers];
combined.sort();
length = combined.length;
//let paddedArr = [];

function populateTable() {
  document.getElementById("assessMe").disabled = false;
  //  const table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear existing content

  // Create 10 rows with 3 columns each
  for (let row = 0; row < 10; row++) {
    const tr = document.createElement('tr');

    for (let col = 0; col < 3; col++) {
      const td = document.createElement('td');
      const dataIndex = row * 3 + col; // Calculate index in the array
      td.textContent = combined[dataIndex];
      tr.appendChild(td);
    }

    table.appendChild(tr);

  }
  // Enable the button to 'assess'
  //document.getElementById("assessMe").style.display = true;
  /*
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
  newButton.addEventListener('click', assessMe);
*/
};
////



//populateTable();
///////////////////////////////////

const myCell = document.getElementById('myCell');
// do the following till the selectedList Array selects 9 items

console.log(selectedList.length);



document.getElementById("myTable").addEventListener("click", myFunction);

function assessMe() {
  console.log("I am inside AssessMe");
  document.getElementById("myTable").removeEventListener("click", myFunction);
  // first array -flowers
  // second array - selectedList
  // Find matches
  const matches = findMatches(flowers, selectedList);
  console.log(matches);
  if (matches.length >= 9) {
    // excellant
    result.textContent = 'Excellant';
  } else if (matches.length >= 6) {
    result.textContent = 'Very Good';
  } else {
    result.textContent = 'Ok';
  }
  // compare with table items.
  // for loop,
  // if it is included in the table items, add 1.
  // if its 9 , excellant
  // if its 6 , Good
  // OK
}
// Function to find matching items between two arrays
function findMatches(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
// process further
function assessFn() {
  console.log("I am inside AssessFn");
}


function myFunction(event) {

  let target = event.target;
  if (target.tagName === "TD" && !(target.classList == 'selected') && (selectedList.length < 3)) {
    //  document.querySelectorAll(".selected").forEach
    //    (cell => cell.classList.remove("selected"));
    target.classList.add("selected");
    //  console.log(target.innerHTML);
    //  console.log(target);
    if (target.classList == 'selected') {
      selectedList.push(target.innerHTML);

    }
  } else {
    target.classList.remove("selected");

    const index = selectedList.indexOf(target.innerHTML);
    if (index > -1) {
      selectedList.splice(index, 1);
    }
    console.log(selectedList);
    //  console.log(target.innerHTML);
  }
};




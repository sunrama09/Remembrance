
// Fruits, Vegs and flowers in storage arrays

const fruits = ["apple", "orange", "banana", "pear", "grape", "mango", "lemon", "jackfruit", "plum", "apricot"];

const vegs = ["carrot", "turnip", "pumpkin", "bitterguard", "tomato", "ladyfinger", "beans", "cauliflower", "cabbage", "onion"];

const flowers = ["rose", "jasmine", "lily", "daffodile", "sunflower", "tulip", "lavender", "orchid", "iris", "violet"]

// put everything together...
let combined = [...fruits, ...vegs, ...flowers];
combined.sort();
length = combined.length;
let paddedArr = [];
let secTableContent = [];

secondtable = document.getElementById("secondTable");
//tryMe = document.getElementById("tryMe");
// keep the 'Assess Me'button disabled
document.getElementById("assessMe").style.display = 'none';
//document.getElementById("assessMe").disabled = true
const findDuplicate = [];
// First Row..
for (let i = 1; i <= 3; i++) {
    index = Math.floor(Math.random() * (length - 1)) + 1;
    //    temp += combined[index] + ' ' +`\n`;
    if (!findDuplicate.includes(combined[index])) {
        findDuplicate.push(combined[index]);
        //// Adding to secondTable content
        secTableContent.push(combined[index]);
        ////
    } else {
        i = i - 1;
        continue;
    }

    padded = combined[index].padEnd(15, " ");
    paddedArr[i - 1] = padded;

}

secTable(paddedArr);
// Second Row....
for (let i = 1; i <= 3; i++) {
    index = Math.floor(Math.random() * (length - 1)) + 1;
    /// test for duplicate
    if (!findDuplicate.includes(combined[index])) {
        findDuplicate.push(combined[index]);
        //// Adding to secondTable content
        secTableContent.push(combined[index]);
        ////
        //    console.log(findDuplicate);
    } else {
        i = i - 1;
        continue;
    }

    padded = combined[index].padEnd(15, " ");
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
        //// Adding to secondTable content
        secTableContent.push(combined[index]);
        ////
        //  console.log(findDuplicate);
    } else {
        i = i - 1;
        continue;
    }
    ///
    padded = combined[index].padEnd(15, " ");
    //   display3Id.textContent += padded;
    paddedArr[i - 1] = padded;

}

secTable(paddedArr);
////////////////////////
console.log(secTableContent);
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
/*
function refreshRows() {
    // Refresh the page by replacing the URL with itself
    location.replace(location.href);
}
    */
// Add a timer for 5 minutes...
function startTimer() {
    let duration = 0.3 * 60; // 5 minutes in seconds
    const timerDisplay = document.getElementById('timer');
    timerDisplay.style.textAlign = "center";
    //   const audio = new Audio('chime.mp3'); // Replace 'chime.mp3' with your chime file

    function updateTimer() {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        //timerDisplay.textContent.
        timerDisplay.textContent = `TIME REMAINING:  ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (duration <= 0) {
            clearInterval(timerInterval);
            changeColor();
            populateTable();
            //    audio.play();
            //   timerDisplay.style.textAlign = "center";
            timerDisplay.textContent = "START CLICKING THOSE ITEMS FROM THE TABLE BELOW!";
        } else {
            duration--;
        }
    }

    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);

}

startTimer();

function changeColor() {
    ////////////////////////////////////
    // Example using document.querySelectorAll()
    const allCells = document.querySelectorAll("table td");
    allCells.forEach(cell => {
        cell.style.color = "white"; // Change all cell text colors to blue
    });

    /////////////////////////////////////
}

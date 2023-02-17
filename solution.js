// Function to set the type of each seat in the seating arrangement
function set_seat_type(array, arr, maxcol) {
    let seat = 0; // Initialize the seat counter to 0
    let section = 0; // Initialize the section counter to 0
    for (let col = 0; col < maxcol; col++, seat++) {
        // If the current column is the first column, mark all the seats in the section as 'W' for window
        if (col == 0) {
            for (let i = 0; i < arr[section][1]; i++) {
                array[i][col] = 'W';
            }
        }
        // If the current seat is a center seat, mark it as 'C' for center
        else if (seat < arr[section][0] - 1) {
            for (let i = 0; i < arr[section][1]; i++) {
                array[i][col] = 'C';
            }
        }
        // If the current seat is the last center seat in the section, mark it as 'A' for aisle,
        // then skip to the next section and mark all the seats in that section as 'A' for aisle
        else if (seat == arr[section][0] - 1 && section < arr.length - 1) {
            for (let i = 0; i < arr[section][1]; i++) {
                array[i][col] = 'A';
            }
            col++;
            section++;
            seat = 0;
            //Mark the starting column of the section as 'A' fro aisle
            for (let i = 0; i < arr[section][1]; i++) {
                array[i][col] = 'A';
            }
        }
        // If the current column is the last column, mark all the seats in the section as 'W' for window
        if (col + 1 == maxcol) {
            for (let i = 0; i < arr[section][1]; i++) {
                array[i][col] = 'W';
            }
        }
    }
}

// Function to get the positions of all the seats in the seating arrangement
function seats_position(array, maxrow, maxcol) {
    let centerseat = [];
    let windowseat = [];
    let aisleseat = [];
    for (let i = 0; i < maxrow; i++) {
        for (let j = 0; j < maxcol; j++) {
            if (array[i][j] == 'C') {
                centerseat.push([i, j]);
            }
            else if (array[i][j] == 'W') {
                windowseat.push([i, j]);
            }
            else if (array[i][j] == 'A') {
                aisleseat.push([i, j]);
            }
        }
    }
    let seat_position = aisleseat.concat(windowseat, centerseat);
    return seat_position;
}

// display the final seating arrangement
function display_seating_arrangement(arr) {
    let output = "";
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + "\t";
        }
        output += "\n";
    }
    console.log(output);
}

function airplaneseats(arr, passenger) {
    // define the input array that specifies the number of rows and seats in each section
    
  
    // initialize variables to store the maximum number of columns and rows
    let maxcol = 0;
    let maxrow = 0;
  
    // calculate the maximum number of columns and rows based on the input array
    for (let i = 0; i < arr.length; i++) {
      maxcol += arr[i][0];
      if (maxrow < arr[i][1]) maxrow = arr[i][1];
    }
  
    // create a 2D array with the dimensions calculated above, initialized to 0
    let array = Array(maxrow).fill().map(() => Array(maxcol).fill(0));
  
    // fill the 2D array with the seat types (W, C, A)
    set_seat_type(array, arr, maxcol);
  
    // get an array of all the seat positions (row, col) in the airplane
    seating_arrangemant = seats_position(array, maxrow, maxcol);
  
    // assign seat numbers  to each passenger in the seating arrangement
    for (let i = 1; i <= passenger; i++) {
      let position = seating_arrangemant.shift();
      array[position[0]][position[1]] = i;
    }
  
    // output the final 2D array with seat numbers and types
    display_seating_arrangement(array);
  }
  

  module.exports = airplaneseats;
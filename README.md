# Airplane Seating Arrangement

This is a simple Node.js program that generates a seating arrangement for an airplane based following	input	and	rules.
1. Always	seat	passengers	star:ng	from	the	front	row	to	back,	starting	from	the	left	to	the	right	
2. Fill	aisle	seats	first	followed	by	window	seats	followed	by	centerseats	(any	order	in	center	seats)	

Input	to	the	program	will	be		
• a	2D	array	that	represents	the	rows	and	columns	[	[3,4],	[4,5],	[2,3],	[3,4]	]	
• Number	of	passengers	waiting	in	queue.

## Getting Started

To run this program, you'll need to have Node.js installed on your computer. If you don't have it, you can download it from the official website: https://nodejs.org/.

1. Clone this repository to your local machine using `git clone https://github.com/shahzeen031/Airplane_seating_algorithm.git`.
2. `solution.js` file has the main solution of the algorithm.
3. Run the program with the command `node index.js`.
4. The program will output a seating arrangement of the passengers on different types (W = window, C = center, A = aisle) of seats of airplane.

## Time Complexity

1. set_seat_type(): This function iterates over each seat in the airplane and sets its type (window, center or aisle) based on its position. The time complexity of this function is O(maxcol), where maxcol is the maximum number of columns in the airplane.

2. seats_position(): This function iterates over each seat in the airplane and finds its position. The time complexity of this function is O(maxrow * maxcol), where maxrow and maxcol are the maximum number of rows and columns in the airplane, respectively.

3. display_seating_arrangement(): This function iterates over each seat in the airplane and displays its type or seat number. The time complexity of this function is O(maxrow * maxcol), where maxrow and maxcol are the maximum number of rows and columns in the airplane, respectively.

4. aeroplaneseats(): This function calls the above functions in sequence and assigns seat numbers to passengers. The time complexity of this function is dominated by the time complexity of the seats_position() function, which is O(maxrow * maxcol).

Therefore, the overall time complexity of the code is O(maxrow * maxcol), where maxrow and maxcol are the maximum number of rows and columns in the airplane, respectively.





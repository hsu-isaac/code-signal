/* you're given an unordered list of integers in an array
you can only og up or down by +-2 per move
what is the minimum number of moves to create pairs of the same number?
if it is not possible, return -1

example
[1,2,3,4] => [3,3], [4,4] moves = 2 because 1+2=3 and 2+2=4
[3,4,6] => -1 because no valid pairs for 3: 4+2=6 but 3 has no pair to match to
[4,6,2,8] => 2 because 2+2=4, 6+2=8; if you match 4,6 you get 4 moves 4+2=6 but 2+2+2+2=8*/

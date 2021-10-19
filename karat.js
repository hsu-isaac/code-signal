/* You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}

Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
}

Sample Input:
student_course_pairs_3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"],
]

Sample output:

find_pairs(student_course_pairs_3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)

 */

const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const studentCoursePairs2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const studentCoursePairs3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"]
];

function mutualCourses(input) {
  // organize student data
  // 0: 'advanced mechanics', 'art history'
  // 1: 'course 1', 'course 2'
  // {
  //  studentid: ['advanced mechnics', 'art history']
  // }
  let reducedStudent = {}
  for (let i = 0; i < input.length; i++) {
    if (!reducedStudent[input[i][0]]) {
      reducedStudent[input[i][0]] = [input[i][1]]
      continue;
    }
    if (reducedStudent[input[i][0]]) {
      reducedStudent[input[i][0]].push(input[i][1])
    }
  }
  // find every possible key pairing
  //   [0,1]
  let array = [];
  for (const studentId in reducedStudent) {
    array.push(studentId)
  }
  let arrayPairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let i2 = i + 1; i2 < array.length; i2++) {
      let pair = [i, i2];
      arrayPairs.push(pair);
    }
  }
  // compare values of reducedStudent[0] and reducedStudent[1]
  for (let i = 0; i < arrayPairs.length; i++) {
    console.log(arrayPairs[i])
  }
}

mutualCourses(studentCoursePairs2);

/* [0, 1]
reducedStudent[0] = [ 'Advanced Mechanics', 'Art History' ]
reducedStudent[1] = [ 'Course 1', 'Course 2' ]
*/
/*
object. ID to classes
{
  '0': [ 'Advanced Mechanics', 'Art History' ],
  '1': [ 'Course 1', 'Course 2' ],
  '2': [ 'Computer Architecture' ],
  '3': [ 'Course 1', 'Course 2' ],
  '4': [ 'Algorithms' ]
}

*/
/* 0
1
2
3
4 */
// {
//  '0,1': [],
//  '0,2': []
// }

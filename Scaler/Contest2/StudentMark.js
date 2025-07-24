/*
### Students Marks

#### Problem Description

You are given an array of strings **A** representing students' names and their score in combined form. For example, `harsh95` represents Harsh has 95 marks.  
You have to return another array of strings containing names and their score sorted on the basis of their marks (largest to lowest). If two students have the same marks, keep the first one from the input array in the first position.  
It is guaranteed that any student’s marks do not exceed 100.

#### Problem Constraints

- 1 <= |A| <= 1000
- 1 <= |A[i]| <= 100


#### Input Format

- First argument is an array of strings **A**.

#### Output Format

- You have to return an array of strings as per the question.

#### Example Input

Input 1:  
```
adarsh80
harsh95
shivam95
```

#### Example Output

Output 1:  
```
harsh95
shivam95
adarsh80
```

#### Example Explanation

Clearly, Harsh and Shivam have equal marks, but Harsh comes first in the input string, and Adarsh has the lowest marks.
*/



const StudentMark = (A) => {
  let digitRegEx = /\D/g;
  let strRegEx = /\d/g;
  return A.map((str) => ({
    name: str.replace(strRegEx, ""),
    marks: str.replace(digitRegEx, ""),
  }))
    .sort((a, b) => b.marks - a.marks)
    .map((Obj) => Obj.name + Obj.marks);
};


console.log(StudentMark(["adarsh80", "harsh95", "shivam95"])); // ["harsh95", "shivam95", "adarsh80"]
console.log(StudentMark(["adarsh80", "harsh95", "shivam95", "nayan90"])); // ["harsh95", "shivam95", "nayan90", "adarsh80"]

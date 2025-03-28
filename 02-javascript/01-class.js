const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
    { name: "Eve", grade: 95 }
  ];

  function highScore() {
        // return students.reduce((max, student) => student.grade > max.grade ? student : max);

        let highestScore = Math.max(...students.map(student => student.grade));
        return students.find(student => student.grade === highestScore);
    
  }

  function highestThan(students) {
    return students.filter(student => student.grade>=80);

  }
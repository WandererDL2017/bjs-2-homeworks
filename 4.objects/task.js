function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let tony = new Student("Tony", "male", 37);
let buzz = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  (this.marks === undefined)? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function(...marks) {
  (this.marks === undefined)? this.marks = [...marks] : this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((acum, mark) => (acum + mark)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
} 
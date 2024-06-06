function Student(name, major, gpa, missedClasses) {
    this.name = name;
    this.major = major;
    this.gpa = gpa;
    this.missedClasses = missedClasses;
  }

  Student.prototype.displayInfo = function() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Спеціальність: ${this.major}`);
    console.log(`Середній бал: ${this.gpa}`);
    console.log(`Кількість пропущених занять: ${this.missedClasses}`);
  };
  
  const student1 = new Student("Іван Іваненко", "Комп'ютерні науки", 3.9, 2);
  const student2 = new Student("Марія Марієнко", "Економіка", 4.5, 1);
  const student3 = new Student("Петро Петренко", "Інженерія", 3.7, 3);
  

  student1.displayInfo.call(student2);
  
  student1.displayInfo.apply(student3);
  
  const displayStudent3Info = student1.displayInfo.bind(student3);
  displayStudent3Info();
  
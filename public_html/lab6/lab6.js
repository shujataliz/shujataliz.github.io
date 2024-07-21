(function () {
    'use strict';


    String.prototype.filter = function (word) {
        return this.split(" ").filter(x => !word.includes(x)).join(" ");
    };

    console.log(`
        Exercise 1:
        Define a filter function on the String object. The function accepts an array of strings that
        specifies a list of banned words. The function returns the string after removing all the
        banned words.
        Example:
        console.log("This house is not nice!".filter('not'));
        Output: "This house is nice!")
        `);
    console.log("This house is not nice!".filter('not'));

    
        Array.prototype.bubbleSort = function () {
            let len = this.length;

            for (let i = 0; i < len; i++) {
                let stop;
                for (let j = 0, stop = len - i; j < stop; j++) {
                    if (this[j] > this[j + 1]) {
                        swap(this, j, j + 1);
                    }
                }
            }

            return this;
        }

        /** to swap elements at index */
        function swap(arr, first_Index, second_Index) {
            var temp = arr[first_Index];
            arr[first_Index] = arr[second_Index];
            arr[second_Index] = temp;
        }

        console.log(`
        Exercise 2:
        Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
        that works by repeatedly stepping through the list to be sorted,
        Example:[6,4,0, 3,-2,1].bubbleSort();
        Output : [-2, 0, 1, 3, 4, 6]    
            `);
        console.log([6,4,0, 3,-2,1].bubbleSort());


        // Exercise 3:
        // Create an object called Teacher derived from a Person function constructor, and implement
        // a method called teach that receives a string called subject, and prints out: [teacher's name]
        // is now teaching [subject]. Create a Teacher object and call its teach method.
        // Also do the same thing using Object.create. When using Object.create you will need a
        // factory function instead of a function constructor in order to pass parameters such as
        // ‘name’ to be set in the prototype.

        console.log(`
            Exercise 3:
        Create an object called Teacher derived from a Person function constructor, and implement
        a method called teach that receives a string called subject, and prints out: [teacher's name]
        is now teaching [subject]. Create a Teacher object and call its teach method.
            `);

            const Person = function () {
            };
            Person.prototype.initialize = function (name) {
                this.name = name;
            }

            Person.prototype.describe = function () {
                return "Person name is "+ this.name;
            }
            
    
            const Teacher = function () {
            };
            Teacher.prototype = new Person();
            Teacher.prototype.teach = function(subject){
                return this.name + " is now teaching " + subject;
            }
    
            const prof = new Teacher();
            prof.initialize("Taha");
            console.log(prof.describe());
            console.log(prof.teach("Inheritance"));

            console.log(`
            Also do the same thing using Object.create. When using Object.create you will need a
            factory function instead of a function constructor in order to pass parameters such as
            ‘name’ to be set in the prototype.
                `);

            const Professor = Object.create(Teacher);
            //factory function
            const  createProfessor = function(name) {
                const prof = Object.create(Professor.prototype)
                prof.initialize(name);
                return prof

            }
            const prof2 = createProfessor("Jackson")
            console.log(prof2.describe());
            console.log(prof2.teach("Database"));


            console.log(`
            Exercise 4:
            Write code that will create person, student, and professor objects.
                `);


            console.log(`
                Person objects have
                * name and age fields
                * a greeting method that prints out: “Greetings, my name is [name] and I am
                [age] years old.”
                * a salute method that prints out: “Good morning!, and in case I dont see you,
                good afternoon, good evening and good night!”
                `);

                
                Person.prototype.initialize = function (name, age) {
                    this.name = name;
                    this.age = age;
                }

                Person.prototype.greet = function () {
                    return `Greetings, my name is ${name} and I am ${age} years old`;
                }

                Person.prototype.salute = function () {
                    function greetingMsg() {
                        const now = new Date();
                        const hour = now.getHours();
                        
                        if (hour < 12) {
                            return "Good morning";
                        } else if (hour < 18) {
                            return "Good afternoon";
                        } else {
                            return "Good evening";
                        }
                    }
                    return `${greetingMsg()}! and in case i don't see you`;
                }

                console.log(`
                        Student objects inherit name, age, and salute from person. They also have a field
                        ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
                        [name] and I am studying [major]. The greeting should be output to the console.
                    `);

                const Student = function() {
                    Person.call(this);
                }
                
                Student.prototype = Object.create(Person.prototype);
                Student.prototype.constructor = Student;
                Student.prototype.initialize = function(name, age, major) {
                    Person.prototype.initialize.call(this, name, age);
                    this.major = major;
                };

                
                Student.prototype.greet = function (subject) {
                    return `Hey, my name is ${this.name} and i am studying ${this.major}`;
                }
                const me = new Student();
                me.initialize("Ali", 32, "Computer Science");
                console.log(me.describe());
                console.log(me.greet());
                console.log(me.salute());

                
                console.log(`
                    Professor objects inherit name, age, and salute from person. They also have a field
                    ‘department’ and have their own greeting method. Their salutation is “Good day,
                    my name is [name] and I am in the [department] department.” Output it to the
                    console.
                    `);

                    const CustomProfessor = function() {
                        Person.call(this);
                    }
                    
                    CustomProfessor.prototype = Object.create(Person.prototype);
                    CustomProfessor.prototype.constructor = CustomProfessor;
                    CustomProfessor.prototype.initialize = function(name, age, department) {
                        Person.prototype.initialize.call(this, name, age);
                        this.department = department;
                    };
                    CustomProfessor.prototype.salute = function() {
                        return `Good day, my name is ${this.name} and I am in the ${this.department} department`;
                    };

                    const prof1 = new CustomProfessor();
                    prof1.initialize("Michael", 35, "Enterprise Architecture");
                    console.log(prof1.salute());


                    console.log(`
                    Create a professor object and a student object. Call both the greeting and salutation
                    methods on each.
                        `);

                    const professor1 = new CustomProfessor();
                    professor1.initialize("Jordan",40, "Sports");
                    
                    const student1 = new Student();
                    student1.initialize("Jack", 20, "Football");
                    
                    console.log(professor1.salute());
                    
                    console.log(student1.greet());
                    console.log(student1.salute());

}
)();
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
            Person.prototype.initialize = function (name, age) {
                this.name = name;
                this.age = age;
            }

            Person.prototype.describe = function () {
                return this.name + ", " + this.age + " years old.";
            }
            
    
            const Teacher = function () {
            };
            Teacher.prototype = new Person();
            Teacher.prototype.teach = function(subject){
                return this.name + " is now teaching " + subject;
            }
    
            const prof = new Teacher();
            prof.initialize("Taha", 40);
            console.log(prof.describe());
            console.log(prof.teach("Inheritance"));

            console.log(`
            Also do the same thing using Object.create. When using Object.create you will need a
            factory function instead of a function constructor in order to pass parameters such as
            ‘name’ to be set in the prototype.
                `);

            const me2 = {
                name: 'teacher',
                age: 32,
                describe: function() { return this.name + " is " + this.age + " years old"; }
            }

            const person2 = Object.create(me2);
            console.log(person2.describe());


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

                
                const Student = function () {
                };
                Student.prototype = new Person();
                Student.prototype.learn = function (subject) {
                    return this.name + " just learned " + subject;
                }
                const me = new Student();
                me.initialize("Ali", 32);
                console.log(me.describe());
                console.log(me.learn("Inheritance"));

            





}
)();
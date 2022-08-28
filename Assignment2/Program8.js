/*
Program 8- Write a program that creates the below Object.
Object name - Student
Property 
    Name
    College Name
    Location
    PinCode
    Teachers details should be teacherName, teacherPhone, teacherSubjects

Print Student name, teacherName on console.
*/

let Student = {

}

Student.name="student1"
Student.collegename="SDM"
Student.Location="Bangalore"
Student.Pincode = 43432
Student.teachers={
    teacher1:{
        teachername:'max',
        teacherphone:3456543,
        teachersubject: 'english'
    }
    }

console.log(Student)
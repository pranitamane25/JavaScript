let student1={
    fname:"shubham",
    lname:"more",
    Rollno:22,

    fullName:function(age){
        console.log(this.fname+"" +this.lname+"and the age is=" +age)
    }
}
    let student2={
    fname:"pranita",
    lname:"mane",
    Rollno:29,
}
    


student1.fullName(11);

student1.fullName.call(student2);

student1.fullName.apply(student2,[10]);

const abc=student1.fullName.bind(student2, 33);
abc();
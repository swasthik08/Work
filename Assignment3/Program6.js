class Courses{
    constructor(CourseName,Price,Validity,TrainerName,PhoneNumber){
        this.CourseName =CourseName
        this.Price =Price
        this.Validity=Validity
        this.TrainerName=TrainerName
        this.PhoneNumber=PhoneNumber
    }

    showDetails(){
        console.log(`Thank you for showing interest in ${this.CourseName} Course - Current Price is  “${this.Price}” and validity of course is till  ${this.Validity} If you have any query then reach out to ${this.TrainerName} mobile - ${this.PhoneNumber}`)
    }

}

export const course1 = new Courses('JS','5000','90 days','Mukund',3456789)
export const course2 = new Courses('Java','1000','90 days','Govind',23345645)
export const course3 = new Courses('python','5300','90 days','Jack',34562345789)

course1.showDetails()



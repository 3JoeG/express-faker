const express= require("express");
const cors = require("cors");
const port=8000;
const app=express();
const faker=require("faker");


app.use(express.json());


class User{
    constructor(){
        this._id=faker.random.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.random.uuid();
        this.name=faker.company.companyName();
        this.address={
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

app.get("/", (req, res)=>{
    res.json({

    })
})

app.get("/api/user/new", (req, res)=>{
    const user1= new User()
    
    res.json({user1})
})

app.get("/api/company/new", (req, res)=>{
    
    const comp1= new Company()
    
    res.json({comp1})
    
})

app.get("/api/user/company", (req, res)=>{
    const user1= new User();
    const comp1= new Company();
    
    res.json({user1,comp1})
    
})


app.listen(port,()=>console.log(`Listening on port ${port}`));
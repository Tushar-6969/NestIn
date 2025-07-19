const mongoose=require("mongoose")

const listing=require("../models/listing.js")
const list_data=require("./data.js")


main()
.then(()=>{
    console.log('mogo d connected ');
    
})
.catch((err)=>{
    console.log('error in connecting database ',err);
    
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/nestin")
}
console.log("pagal");
// console.log(list_data.data);

const initdb=async()=>{
 await listing.deleteMany({})
 list_data.data=list_data.data.map((obj)=>({...obj,owner:"686f8f320d2cf1927173af28"}))
 await listing.insertMany(list_data.data);
console.log(list_data.data);

 console.log('db was intilized ');
 


}


initdb()
.then((res)=>{
    console.log(res);
    
})


const jk = async () => {
    try {
      const data = await listing.find();
      console.log("Listings from DB:", data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };
  
  jk();
  
const mongoose = require('mongoose');

// Kitty model
const kittySchema = require("../../../(models)/models.js");

main().catch(err => console.log(err));

export default async function main() {
  await mongoose.connect('mongodb+srv://admin:VbVnRrz2ZtO4wF8u@cluster0.ock06me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
  // Check if the model is already compiled
  let Kitten;
  try {
    Kitten = mongoose.model('Kitten');
  } catch (error) {
    Kitten = mongoose.model('Kitten', kittySchema);
  }

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'

  const fluffy = new Kitten({ name: 'Fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

  try{
    await fluffy.save(); // sends this to MongoDB
  } catch {
    console.log("Already have a kitten!");  
  }
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);

  await Kitten.find({ name: /^fluff/ });
  
}
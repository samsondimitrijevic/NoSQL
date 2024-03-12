const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect("mongodb://localhost:27017/test-db")
  .then(() => {
    console.log("Connected to database test-db");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// Define a schema
const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
});

// Create a car model based on the schema
const Car = mongoose.model("Car", carSchema);

async function main() {
  try {
    const car = new Car({
      make: "Ford",
      model: "Mustang",
      year: 2020,
    });

    const savedCar = await car.save();
    console.log("Car saved successfully:", savedCar);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

main();

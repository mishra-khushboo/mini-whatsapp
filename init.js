const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let chats = [
  {
    from: "khushi",
    to: "shreya",
    msg: "when are you coming?",
    created_at: new Date(),
  },
  {
    from: "shubham",
    to: "shivani",
    msg: "I am home",
    created_at: new Date(),
  },
  {
    from: "akshat",
    to: "aman",
    msg: "buy milk",
    created_at: new Date(),
  },
  {
    from: "anaya",
    to: "sima",
    msg: "why are you late",
    created_at: new Date(),
  },
  {
    from: "ahaan",
    to: "rishabh",
    msg: "which match?",
    created_at: new Date(),
  },
];

chat.insertMany(chats);

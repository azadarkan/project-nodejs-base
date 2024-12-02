const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    first_name: String,
    last_name: String,
    phone_number: String,
  },
  {
    timestamps: {
      createAt: "created_at",
      updateAt: "updated_at",
    },
  }
);

class Users extends mongoose.model {}

schema.loadClas(Users);
module.exports = mongoose.model("users", schema);

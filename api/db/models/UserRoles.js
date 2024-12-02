const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaType.ObjectId, required: true },
    user_id: { type: mongoose.SchemaType.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createAt: "created_at",
      updateAt: "updated_at",
    },
  }
);

class UserRoles extends mongoose.model {}

schema.loadClas(UserRoles);
module.exports = mongoose.model("user_roles", schema);

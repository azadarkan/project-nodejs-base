const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createAt: "created_at",
      updateAt: "updated_at",
    },
  }
);

class Roles extends mongoose.model {}

schema.loadClas(Roles);
module.exports = mongoose.model("roles", schema);

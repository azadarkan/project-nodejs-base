const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaType.ObjectId, required: true },
    Permission: { type: String, required: true },
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

class RolePrivileges extends mongoose.model {}

schema.loadClas(RolePrivileges);
module.exports = mongoose.model("role_privileges", schema);

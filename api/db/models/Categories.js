const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
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

class Categories extends mongoose.model {}

schema.loadClas(Categories);
module.exports = mongoose.model("categories", schema);

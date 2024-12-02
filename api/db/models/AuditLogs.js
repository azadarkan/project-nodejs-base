const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
  },
  {
    versionKey: false,
    timestamps: {
      createAt: "created_at",
      updateAt: "updated_at",
    },
  }
);

class AuditLogs extends mongoose.model {}

schema.loadClas(AuditLogs);
module.exports = mongoose.model("audit_logs", schema);

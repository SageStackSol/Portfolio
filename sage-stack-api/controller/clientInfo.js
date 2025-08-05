const clientInfoSchema = require("../model/clientSchema");


const postClientInfo = async (req, res) => {
  const { name, mobileNo, email } = new clientInfoSchema(req.body);

  console.log(`name=${name},phn=${mobileNo},mail=${email}`);
  if (!name || !mobileNo || !email) {
    return res.status(400).send("All fields are required");
  }
  try {
    const clientInfo = await clientInfoSchema.create(req.body);
    clientInfo.save();
    res.status(201).json({ success: true, data: clientInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "server error" });
  }

  // res.send('ok')
}

module.exports = postClientInfo
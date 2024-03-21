const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put("https://api.chatengine.io/users/", {
            username: username,
            secret: username,
            first_name: username
        }, {
            headers: { "private-key": "ad857a0a-c082-4e59-9601-75ac5170cd52" }
        });
        return res.status(r.status).json(r.data);

    } catch (e) {
        return res.status(500).json(e.response.data);
    }
});

app.listen(3001, () => {
    console.log("Server is running successfully!");
});

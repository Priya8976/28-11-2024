// 
const express = required("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello world");
});

app.get("/date", (req, res) => {
    res.send(new Date().toString());
});

app.use((req,res) => {
    res.status(404).send("page not found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

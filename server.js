import express from "express";

const port = 3000;
const app = express();

const budget = {
    myBudget: [
        { title: "Eat out", budget: 30 },
        { title: "Rent", budget: 350 },
        { title: "Groceries", budget: 90 },
    ],
};

function main() {
    app.use("/", express.static("public"));

    app.get("/hello", (_req, res) => {
        res.send("Hello, world!");
    });
    app.get("/budget", (_req, res) => {
        res.json(budget);
    });

    app.listen(port, () => {
        console.log(`API serving at http://localhost:${port}`);
    });
}

main();

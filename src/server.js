const express=require("express")
const app=express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
app.get("/", (req, res) => {
    res.json({
    message: "RouteForge Backend"
});
});
const orders = [
    {
        id: "ORD001",
        weight: 300,
        priority: "HIGH"
    },
    {
        id: "ORD002",
        weight: 500,
        priority: "NORMAL"
    }
];
app.get("/api/orders", (req, res) => {
    res.json(orders);
});
app.post("/api/orders", (req, res) => {

    const order = req.body;

    orders.push(order);

    res.json(order);

});
import express, {Express} from "express";
import cors from 'cors';
import path from "path";

const app: Express = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server works on port ${PORT}`)
});

app.get('/computeTriangles/:radius/:count', async (req, res) => {
    const {count, radius} = req.params;
    const coordinates = [];
    for (let i = 0; i < Number(count); i++) {
        const point = {x: Number(radius)* Math.cos(Math.PI*2*i/Number(count)), y:Number(radius)* Math.sin(Math.PI*2*i/Number(count))};
        coordinates.push(point);
    }

    res.json({points: coordinates});
})

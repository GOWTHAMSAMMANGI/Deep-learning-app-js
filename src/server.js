const express = require('express');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const port = process.env.PORT || 3000;

// Load the saved model
tf.loadLayersModel('file://./model').then(loadedModel => {
    app.post('/predict', async (req, res) => {
        const input = parseFloat(req.body.input);
        const prediction = await loadedModel.predict(tf.tensor([[input]]));
        res.json({ prediction: prediction.dataSync()[0] });
    });

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
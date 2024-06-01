
const tf = require('@tensorflow/tfjs-node');

// Define the model (simple example - a basic linear regression)
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] })); // Input shape: single value

// Compile the model
model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

// Train the model (simple example - using dummy data)
const x = tf.tensor([[1], [2], [3], [4]]);
const y = tf.tensor([[2], [4], [6], [8]]);
model.fit(x, y, { epochs: 50 }).then(() => {
    console.log('Model trained!');
    // Save the model after training (for later use)
    model.save('file://./model').then(() => {
        console.log('Model saved!');
    });
});
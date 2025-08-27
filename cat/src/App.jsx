import React from "react";
import "./App.css";

// Import images
import l1 from "./images/l1.png"
import cnn from "./images/cnn.png"
import batch from "./images/batch.png"
import cnn1 from "./images/cnn1.png";
import cnn11 from "./images/cnn1-1.png";
import cnn2 from "./images/cnn2.png";
import cnn21 from "./images/cnn2-1.png";
import cnn22 from "./images/cnn2-2.png";
import cnn3 from "./images/cnn3.png";
import cnn31 from "./images/cnn3-1.png";
import cnn32 from "./images/cnn3-2.png";

function App() {
  return (
    <div className="container">
      <h1>CAT VS DOG CLASSIFIER</h1>
      <h3>
        <a
          href="https://drive.google.com/file/d/1hUXncthd9UdNZCQQPuejKAGsK8U-ZYe1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffdd57", textDecoration: "none" }}
        >
          CODE-link (CLICK HERE)
        </a>
      </h3>
      <h3>CNN-SIMPLE MODEL</h3>

      <div className="image-row">
        <img src={cnn} alt="CNN" />
        <img src={cnn1} alt="CNN1" />
        <img src={cnn11} alt="CNN1-1" />
      </div>
      <h2>High-Level Summary of Architecture</h2>
      <h4>
        In this project, a Convolutional Neural Network (CNN) was designed using
        Keras to classify images of cats and dogs. The architecture consists of
        three convolutional layers with increasing filter sizes (32, 64, and
        128), each followed by max pooling to reduce spatial dimensions. These
        layers extract hierarchical features from the input images. After
        flattening the feature maps, the model uses two fully connected (dense)
        layers to learn complex patterns, ending with a sigmoid-activated output
        layer for binary classification. The model is compiled with the Adam
        optimizer and binary cross-entropy loss, tracking accuracy during
        training.
      </h4>
      <h3>RESULT</h3>
      <h4>
        During training over 10 epochs, the model achieved very high training
        accuracy—over 99%—indicating it learned the training data extremely
        well. However, the validation accuracy plateaued around 79–80%, and the
        validation loss steadily increased over time. This pattern suggests the
        model is overfitting: it memorized the training data but failed to
        generalize to unseen data
      </h4>
      <h3>problem with this model</h3>
      <h4>
        model learned the training data too well (memorization), but it fails to
        generalize to new, unseen images. Training performance is very high
        Validation performance is flat or slightly decreasing Validation loss
        keeps increasing
      </h4>
      <h3>improvment</h3>
      <h4>
        To improve the model, add dropout layers to reduce overfitting, and use
        data augmentation to increase training data diversity. Implement early
        stopping to avoid overtraining
      </h4>
      <h3>CNN- with Batch Normalization and Dropout layer</h3>
      <h5>improved model</h5>
      <div className="image-row">
        <img src={batch} alt="CNN" />
        <img src={cnn2} alt="CNN1" />
        <img src={cnn21} alt="CNN1-1" />
        <img src={cnn22} alt="CNN1-1" />
      </div>
      <h3>High-Level Summary of Architecture</h3>
      <h4>
        The model is a CNN designed for binary classification of images (likely
        cats vs dogs). It consists of three convolutional blocks, each with
        Conv2D layers followed by batch normalization, max pooling, and dropout
        for regularization. Instead of flattening, it uses global average
        pooling to reduce spatial dimensions efficiently. The fully connected
        part has two dense layers with dropout to further reduce overfitting,
        and a sigmoid output for binary classification. The model is compiled
        with Adam optimizer and binary cross-entropy loss
      </h4>
      <h3>RESULT</h3>
      <h4>
        Training accuracy improves steadily from about 57% to 83% over 10
        epochs. Validation accuracy also improves but fluctuates between ~60% to
        81%, peaking around epoch 8. Validation loss decreases overall but shows
        some fluctuations. This indicates the model is learning well and
        generalizing better than previous versions, but some overfitting and
        instability remain.
      </h4>
      <h3>Improvement Scope</h3>
      <h4>
        Data Augmentation: To increase dataset diversity and reduce overfitting.
        Early Stopping: Stop training when validation loss stops improving to
        avoid overtraining. Learning Rate Scheduling: Adjust learning rate
        dynamically for better convergence. Model Complexity: Experiment with
        more layers or pre-trained models (transfer learning) for better feature
        extraction. Batch Size / Epochs: Tune batch size and number of epochs
        for optimal training. Additional Regularization: Explore techniques like
        weight decay or more dropout if overfitting persist
      </h4>
      <h3>CNN- with Batch Normalization, Dropout layer and regularization</h3>

      <div className="image-row">
        <img src={l1} alt="CNN" />
        <img src={cnn3} alt="CNN1" />
        <img src={cnn31} alt="CNN1-1" />
        <img src={cnn32} alt="CNN1-1" />
      </div>
      <h3>High-Level Summary of Architecture</h3>
      <h4>
        The model builds on the previous CNN architecture but introduces L2
        regularization on the dense layers with a regularization factor of
        0.001. This penalizes large weights during training to reduce
        overfitting. The architecture still uses three convolutional blocks with
        batch normalization, max pooling, and dropout, followed by global
        average pooling. The dense layers have L2 regularization, plus dropout,
        before the sigmoid output for binary classification. The model is
        compiled with the Adam optimizer and binary cross-entropy loss.
      </h4>
      <h3>RESULT</h3>
      <h4>
        Training accuracy improves from around 57% initially to approximately
        84% by epoch 10, showing steady learning progress. However, validation
        accuracy fluctuates, starting near 51%, rising to around 77% by the end,
        but with some dips in between. Validation loss shows instability,
        initially decreasing but increasing at times, indicating irregular
        generalization. The model reduces some overfitting compared to no
        regularization but still faces challenges with consistent validation
        performance.
      </h4>
      <h3>Improvement Scope</h3>
      <h4>
        Tune Regularization Strength: Adjust L1 and L2 values to find the
        optimal balance between underfitting and overfitting. Combine L1 & L2
        Regularization: Experiment with both (Elastic Net) to encourage sparsity
        and smoothness in weights. Add Data Augmentation: To expand training
        data variability and improve generalization. Use Early Stopping: To halt
        training at optimal validation performance. Adjust Dropout Rates:
        Fine-tune dropout percentages to better regularize the network. Try
        Transfer Learning: Use pre-trained models for better feature extraction
        and potentially higher accuracy.
      </h4>
    </div>
  );
}

export default App;

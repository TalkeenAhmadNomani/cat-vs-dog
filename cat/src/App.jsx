import React from "react";
import "./App.css";

// Import images
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

      <h3>CNN1</h3>
      <img src={cnn1} alt="CNN1" />
      <img src={cnn11} alt="CNN1-1" />
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

      <p>
        The trained model from CNN1. It shows how the model learned feature
        representations from the dataset.
      </p>

      <h3>CNN2</h3>
      <img src={cnn2} alt="CNN2" />
      <p>
        CNN2 improves on the previous architecture with additional layers and
        dropout for regularization to prevent overfitting.
      </p>

      <img src={cnn21} alt="CNN2-1" />
      <p>
        The output performance metrics of CNN2 after training on a larger
        dataset with enhanced preprocessing.
      </p>

      <img src={cnn22} alt="CNN2-2" />
      <p>
        Confusion matrix showing improved accuracy and reduced false positives
        compared to CNN1.
      </p>

      <h3>CNN3</h3>
      <img src={cnn3} alt="CNN3" />
      <p>
        CNN3 integrates batch normalization and fine-tuning, leveraging transfer
        learning for better generalization.
      </p>

      <img src={cnn31} alt="CNN3-1" />
      <p>
        Training history of CNN3 showing stable convergence and minimal loss
        fluctuations.
      </p>

      <img src={cnn32} alt="CNN3-2" />
      <p>
        Final evaluation metrics for CNN3 demonstrate superior performance in
        real-world test conditions.
      </p>
    </div>
  );
}

export default App;

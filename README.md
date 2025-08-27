CNN Model Architecture

Three convolutional blocks with Conv2D, BatchNormalization, MaxPooling2D, and Dropout layers.

GlobalAveragePooling2D replaces flatten to reduce parameters.

Dense layers with L2 regularization and dropout for preventing overfitting.

Binary classification output layer with sigmoid activation.

Compiled using Adam optimizer and binary cross-entropy loss.

Training Results Summary

Initial training accuracy was low (~57%) but improved steadily to ~84% after 10 epochs.

Validation accuracy fluctuated and peaked around ~77%, with validation loss showing instability.

L2 regularization helped reduce overfitting compared to a baseline model without it.

Some irregularities in validation indicate scope for improvement such as data augmentation and early stopping.

Improvements and Future Work

Implement data augmentation for more varied training samples.

Use early stopping to prevent overtraining.

Experiment with combined L1 and L2 regularization (Elastic Net).

Tune dropout rates and learning rate schedules.

Explore transfer learning with pre-trained CNN models.

Optimize batch sizes and training epochs.

React Frontend

Displays a navy blue themed webpage centered horizontally.

Shows the project title, model architectures (CNN1, CNN2, CNN3) with associated images.

Includes detailed descriptions, results, problems, and improvement suggestions.

Images are arranged three per row with black backgrounds and padding.

Simple CSS for a clean, readable layout.
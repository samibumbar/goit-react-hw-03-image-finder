# Feedback Component

This is a simple yet dynamic feedback component built in React. The component allows users to leave feedback through emoji-based options and view live statistics regarding the feedback given.

## Features

- **Emoji-based feedback**: Users can provide feedback by selecting one of the predefined emoji options.
- **Live statistics**: Feedback data is immediately reflected, showing the total feedback and the percentage of positive feedback.
- **Interactive UI**: Buttons feature a subtle hover effect with rotating animations and shadows for a modern, interactive feel.
- **Responsive design**: The component is designed to work well on different screen sizes with adjustable button sizes.

## Components Overview

### 1. `App.tsx`
The main component that manages the state for the feedback (good, neutral, bad) and handles logic for counting and displaying feedback statistics.

- **State management**: Keeps track of feedback counts for "good", "neutral", and "bad" using the `useState` hook.
- **Feedback options**: A set of emoji options are passed to the `FeedbackOptions` component for user interaction.
- **Statistics**: The `Statistics` component shows the number of good, neutral, and bad feedback items, along with the total and percentage of positive feedback.

### 2. `FeedbackOptions.tsx`
This component renders the feedback buttons (emoji-based). It accepts the following props:
- **`options`**: An array of feedback options (in this case, emoji).
- **`onLeaveFeedback`**: A callback function triggered when a user clicks on an emoji, sending the feedback type back to the parent component.

### 3. `Statistics.tsx`
Displays the statistics for the feedback collected, including:
- The number of good, neutral, and bad feedback items.
- The total feedback count.
- The percentage of positive feedback (based on good feedback).

### 4. `Notification.tsx`
A simple component that shows a message (such as "No feedback yet") when no feedback has been submitted.

### 5. `Section.tsx`
Wraps the feedback and statistics sections, adding a title to each section.

## Installation and Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/feedback-component.git
   cd feedback-component

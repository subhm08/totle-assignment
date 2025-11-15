# 📚 TopicSearch React Component

This project is a simple React component, `TopicSearch`, that displays a list of topics and allows a user to filter them in real-time. This simulates a topic browsing UI for a Catalogue Management System.

## ✨ Features

* **Search Input:** A text field for users to type their query.
* **Topic List:** Displays all available topics as "cards," showing topic name and category.
* **Real-time Filtering:** The list filters instantly as the user types.
* **Case-Insensitive:** Searching for "thermo" or "Thermo" will both match "Thermodynamics."
* **Graceful Handling:**
    * An empty search bar displays all topics.
    * A search with no matches displays a "No topics found" message.

## 🔧 Setup and Running

To run this project locally, follow these steps.

**Prerequisites:**
* Node.js (v14 or later)
* npm or yarn

**Instructions:**

1.  **Clone (or download) the repository:**
    ```bash
    git clone https://github.com/subhm08/totle-assignment
    cd project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(or `yarn install`)*

3.  **Run the development server:**
    ```bash
    npm start
    ```
    *(or `yarn start`)*

4.  **View in browser:**
    Open [http://localhost:3000](http://localhost:3000) to see the component in action.

## 📂 File Structure

* `/src/App.js`: The main application component that renders `TopicSearch`.
* `/src/TopicSearch.js`: The core component. It contains the data, state logic, and JSX for rendering the UI.
* `/src/index.css`: The stylesheet for the `TopicSearch` component.
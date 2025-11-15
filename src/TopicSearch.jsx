import React, { useState } from 'react';
// import './TopicSearch.css';

// In-memory data
const initialTopics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Calculus II", category: "Mathematics" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "Data Structures", category: "Computer Science" },
  { id: 5, name: "Macroeconomics", category: "Economics" },
  { id: 6, name: "Linear Algebra", category: "Mathematics" },
];

function TopicSearch() {
  // State for the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Event handler for the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the topics based on the search term
  // This is derived on each render, no need for separate state
  const filteredTopics = initialTopics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-search-container">
      <h2>Browse Topics</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search by topic name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="topic-list">
        {/* Conditional Rendering */}
        
        {/* Case 1: Topics are found */}
        {filteredTopics.length > 0 && (
          filteredTopics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        )}

        {/* Case 2: No topics are found */}
        {filteredTopics.length === 0 && (
          <p className="no-topics-found">No topics found</p>
        )}
      </div>
    </div>
  );
}

export default TopicSearch;
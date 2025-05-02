import React, { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [viewQuestions, setViewQuestions] = useState(false);

  useEffect(() => {
    
    const fetchedQuestions = [
      {
        prompt: "lorem testum 1",
        answers: ["Test Answer 1", "Test Answer 2", "Test Answer 3", "Test Answer 4"],
        correctAnswer: 1,
      },
      {
        prompt: "lorem testum 2",
        answers: ["Test Answer 1", "Test Answer 2", "Test Answer 3", "Test Answer 4"],
        correctAnswer: 2,
      },
    ];
    setQuestions(fetchedQuestions);
  }, []);

  const handleViewQuestions = () => {
    setViewQuestions(true);
  };

  return (
    <div>
      <nav>
        <button onClick={handleViewQuestions}>View Questions</button>
      </nav>
      <div>
        <h2>Question List</h2>
        {viewQuestions && (
          <ul>
            {questions.map((question, index) => (
              <li key={index} style={{ marginBottom: "1.5rem" }}>
                <p>
                  <strong>Question:</strong> {question.prompt}
                </p>
                <ul>
                  {question.answers.map((answer, i) => (
                    <li key={i}>
                      {answer}{" "}
                      {i === question.correctAnswer && <strong>(Correct)</strong>}
                    </li>
                  ))}
                </ul>
                <label>
                  Change Correct Answer:
                  <select>
                    {question.answers.map((_, i) => (
                      <option key={i} value={i}>
                        Answer {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <br />
                <button style={{ marginTop: "0.5rem" }}>Delete Question</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

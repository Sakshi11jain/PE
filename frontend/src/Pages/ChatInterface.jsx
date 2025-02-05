import { useState } from "react";

const ChatInterface = () => {
  const [step, setStep] = useState("selection");
  const [topic, setTopic] = useState("");
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (prompt) => {
    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error with API:", error);
      return "Unable to process the request.";
    }
  };

  const handleStartChat = async () => {
    setLoading(true);
    const question = await askAI(
      `Generate a ${topic} interview question for a beginner-level candidate.`
    );
    setChat([{ sender: "bot", message: question }]);
    setLoading(false);
  };

  const handleResponse = async () => {
    setLoading(true);
    const feedback = await askAI(
      `Evaluate this answer for the following question: "${chat[chat.length - 1]?.message}". Answer: "${input}". Provide constructive feedback.`
    );
    const nextQuestion = await askAI(
      `Generate the next ${topic} interview question for a beginner-level candidate.`
    );
    setChat([
      ...chat,
      { sender: "user", message: input },
      { sender: "bot", message: feedback },
      { sender: "bot", message: nextQuestion },
    ]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {step === "selection" && (
        <div className="bg-white p-6 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Choose Interview Type</h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            onClick={() => setStep("topic")}
          >
            Technical
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => {
              setTopic("hr");
              setStep("chat");
              setChat([
                {
                  sender: "bot",
                  message: "Welcome to the HR interview! Let's get started.",
                },
              ]);
            }}
          >
            HR
          </button>
        </div>
      )}
      {step === "topic" && (
        <div className="bg-white p-6 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Choose Technical Topic</h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            onClick={() => {
              setTopic("frontend");
              setStep("chat");
              handleStartChat();
            }}
          >
            Frontend
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            onClick={() => {
              setTopic("backend");
              setStep("chat");
              handleStartChat();
            }}
          >
            Backend
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              setTopic("fullstack");
              setStep("chat");
              handleStartChat();
            }}
          >
            Fullstack
          </button>
        </div>
      )}
      {step === "chat" && (
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-lg font-bold mb-4">Chat - {topic.toUpperCase()}</h2>
          <div className="h-64 overflow-y-scroll border p-2 mb-4">
            {chat.map((c, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  c.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`${
                    c.sender === "bot" ? "text-blue-500" : "text-green-500"
                  }`}
                >
                  {c.message}
                </span>
              </div>
            ))}
          </div>
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {!loading && (
            <>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border w-full px-2 py-1 mb-2"
                placeholder="Your answer..."
              />
              <button
                onClick={handleResponse}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatInterface;

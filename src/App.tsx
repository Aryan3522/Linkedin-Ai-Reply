import AIReplyButton from './components/AIReplyButton';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">LinkedIn AI Reply Extension</h1>
      <p className="mb-4">This extension adds an AI reply button to LinkedIn messages.</p>
      <AIReplyButton />
    </div>
  );
}

export default App;

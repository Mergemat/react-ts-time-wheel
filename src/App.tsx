import TimeWheel from './components/TimeWheel';

const App = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full select-none bg-slate-800 perspective">
      <TimeWheel items={[...Array(24).keys()]} />
    </div>
  );
};

export default App;

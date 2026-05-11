import { useCounterStore } from "../store/CounterStore";

function Home() {
  let newCounter = useCounterStore((state) => state.newCounter);
  let incrementCounter = useCounterStore((state) => state.incrementCounter);

  return (
    <div className="text-center">
      <h1 className="text-6xl mt-10 text-cyan-900">Counter: {newCounter}</h1>
      <button className="bg-cyan-200 rounded-2xl p-1.5 mt-7 text-2xl text-fuchsia-950" onClick={incrementCounter}>
        Change
      </button>
    </div>
  );
}

export default Home;
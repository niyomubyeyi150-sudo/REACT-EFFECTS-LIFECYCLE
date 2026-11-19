
import { useEffect, useState } from "react";

// Part D: Live Clock
function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="mt-4 text-2xl font-bold">
      {time.toLocaleTimeString()}
    </p>
  );
}

function App() {
  const price = 500;
  const quantity = 3;
  const total = price * quantity;

  function handleClick() {
    console.log("Button clicked!");
  }

  // Part B: Title Mirror
  const [username, setUsername] = useState("First App");

  useEffect(() => {
    document.title = username;
  }, [username]);

  const celsius = 25;
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Part C: Saved Note
  const [note, setNote] = useState(() => {
    return localStorage.getItem("note") || "My first note";
  });

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  function handleDelete() {
    setNote("");
  }

  // Part D: Show or hide clock
  const [showClock, setShowClock] = useState(true);

  const card = "rounded-xl border border-stone-200 bg-white p-5 shadow-sm";
  const input =
    "mt-3 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-200";
  const button =
    "mt-3 rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700";

  return (
    <main className="min-h-screen bg-stone-100 px-5 py-10 text-stone-800">
      <div className="mx-auto max-w-3xl space-y-8">

        <header className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
            React Practice
          </p>
          <h1 className="text-3xl font-bold">
            Part A: Identify Side Effects
          </h1>
          <p className="text-sm text-stone-500">
            Classify six examples as pure calculation, event handler or Effect.
          </p>
        </header>

        {/* Example 1: Pure Calculation */}
        <section className={card}>
          <h2 className="text-lg font-semibold">1. Pure Calculation</h2>
          <p className="mt-3 text-sm text-stone-500">
            Calculate the total price of products.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-stone-100 p-3">
              <p className="text-xs text-stone-500">Price</p>
              <p className="mt-1 font-semibold">{price}</p>
            </div>
            <div className="rounded-lg bg-stone-100 p-3">
              <p className="text-xs text-stone-500">Quantity</p>
              <p className="mt-1 font-semibold">{quantity}</p>
            </div>
            <div className="rounded-lg bg-stone-100 p-3">
              <p className="text-xs text-stone-500">Total</p>
              <p className="mt-1 font-semibold">{total}</p>
            </div>
          </div>
        </section>

        {/* Example 2: Event Handler */}
        <section className={card}>
          <h2 className="text-lg font-semibold">2. Event Handler</h2>
          <p className="mt-2 text-sm text-stone-500">
            A user clicks a button to submit an action.
          </p>
          <button onClick={handleClick} className={button}>
            Click me
          </button>
        </section>

        {/* Example 3: Title Mirror */}
        <section className={card}>
          <h2 className="text-lg font-semibold">3. Effect: Title Mirror</h2>
          <p className="mt-2 text-sm text-stone-500">
            Update the browser tab title whenever the username changes.
          </p>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={input}
            placeholder="Enter your username"
          />
          <p className="mt-2 text-sm text-stone-600">
            Current username: <span className="font-semibold">{username}</span>
          </p>
        </section>

        {/* Example 4: Pure Calculation */}
        <section className={card}>
          <h2 className="text-lg font-semibold">4. Pure Calculation</h2>
          <p className="mt-2 text-sm text-stone-500">
            Convert a temperature from Celsius to Fahrenheit.
          </p>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-stone-100 p-4">
            <p className="font-medium">{celsius}°C</p>
            <span className="text-stone-400">→</span>
            <p className="font-semibold">{fahrenheit}°F</p>
          </div>
        </section>

        {/* Example 5: Save Note */}
        <section className={card}>
          <h2 className="text-lg font-semibold">5. Effect: Save Note</h2>
          <p className="mt-2 text-sm text-stone-500">
            Save a note to localStorage whenever it changes.
          </p>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className={input}
            rows={4}
            placeholder="Write your note here..."
          />
        </section>

        {/* Example 6: Delete Note */}
        <section className={card}>
          <h2 className="text-lg font-semibold">
            6. Event Handler: Delete Note
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            A user clicks a button to delete a note.
          </p>
          <button
            onClick={handleDelete}
            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Delete note
          </button>
        </section>

        {/* Part D: Live Clock */}
        <section className={card}>
          <h2 className="text-lg font-semibold">Part D: Live Clock</h2>
          <p className="mt-2 text-sm text-stone-500">
            Display the current time and update it every second.
          </p>

          <button
            onClick={() => setShowClock(!showClock)}
            className={button}
          >
            {showClock ? "Hide Clock" : "Show Clock"}
          </button>

          {showClock && <LiveClock />}
        </section>

      </div>
    </main>
  );
}

export default App;

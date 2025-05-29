import { useState } from "react";
import * as math from "mathjs";

function Calc() {
  const [counter, setCounter] = useState("");
  const [prev, setPrev] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const themeClasses = darkMode
    ? "bg-gray-900 text-white placeholder-white"
    : "bg-white text-gray-900 placeholder-gray-600";

  function getValue(id) {
    return Number.parseFloat(document.getElementById(id).value);
  }

  const operations = {
    add: () => updateResult(getValue("input1") + getValue("input2")),
    sub: () => updateResult(getValue("input1") - getValue("input2")),
    mul: () => updateResult(getValue("input1") * getValue("input2")),
    dib: () => {
      const a = getValue("input1"),
        b = getValue("input2");
      b !== 0 ? updateResult(a / b) : setCounter("Cannot divide by 0");
    },
    log: () => updateResult(math.log(getValue("input3"), 10)),
    fact: () => updateResult(math.factorial(getValue("input3"))),
    deri: () => {
      try {
        const exp = document.getElementById("derivation").value;
        const wrt = document.getElementById("wrt").value;
        const result = math.derivative(exp, wrt).toString();
        updateResult(result);
      } catch {
        setCounter("Invalid expression");
      }
    },
    combi: () => {
      try {
        updateResult(math.combinations(getValue("input1"), getValue("input2")));
      } catch {
        setCounter("Invalid");
      }
    },
    permu: () => {
      try {
        updateResult(math.permutations(getValue("input1"), getValue("input2")));
      } catch {
        setCounter("Invalid");
      }
    },
    power: () => {
      try {
        updateResult(math.pow(getValue("input1"), getValue("input2")));
      } catch {
        setCounter("Invalid");
      }
    },
  };

  const updateResult = (value) => {
    setPrev(counter);
    setCounter(value);
  };

  return (
    <div
      className={`calc max-w-4xl mx-auto mt-10 p-6 rounded-2xl shadow-xl ${themeClasses}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Previous Result: <span className="text-blue-400">{prev}</span>
        </h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-medium"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          {["input1", "input2", "input3"].map((id, index) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1 font-medium">
                {index < 2
                  ? `Input Box ${String.fromCharCode(65 + index)}:`
                  : "Single Input (SI) Box:"}
              </label>
              <input
                id={id}
                type="number"
                placeholder={
                  index < 2 ? "Binary operations & C/P" : "For log, factorial"
                }
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="derivation" className="block mb-1 font-medium">
              Derivation Expression:
            </label>
            <input
              id="derivation"
              type="text"
              placeholder="e.g., x^2 + 3x"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="wrt" className="block mb-1 font-medium">
              With Respect To:
            </label>
            <input
              id="wrt"
              type="text"
              placeholder="e.g., x, y, z"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="my-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Operations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Object.entries(operations).map(([key, fn]) => (
            <button
              key={key}
              onClick={fn}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded shadow"
            >
              {key === "add"
                ? "+"
                : key === "sub"
                ? "-"
                : key === "mul"
                ? "*"
                : key === "dib"
                ? "/"
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-center">
        Result: <span className="text-blue-400">{counter}</span>
      </div>
    </div>
  );
}

export default Calc;

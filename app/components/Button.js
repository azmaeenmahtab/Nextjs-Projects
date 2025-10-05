"use client"
export default function Button({ onClick, children }) {
    return (
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => console.log('Button clicked!')}>
        click me
      </button>
    );
}
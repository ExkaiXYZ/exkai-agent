export default function QueryConsole() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-3xl font-bold mb-6">
        AI Query Console
      </h2>

      <textarea
        className="w-full border rounded-xl p-6"
        rows={5}
        placeholder="Ask: Show traffic congestion near Manhattan..."
      />

      <button className="mt-6 px-8 py-3 rounded-xl bg-cyan-600 text-white">
        Run Query
      </button>

    </section>
  );
}

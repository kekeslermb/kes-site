export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16" id="contact">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Contact</h1>

        <p className="text-gray-300">
          The easiest way to reach me:
        </p>

        <div className="space-y-3 text-gray-300">
          <p>
            Email:{" "}
            <a className="underline hover:text-white" href="mailto:kekeslermb@gmail.com">
              kekeslermb@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a className="underline hover:text-white" href="#" onClick={(e) => e.preventDefault()}>
              linkedin.com/in/keslerbonheur
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a className="underline hover:text-white" href="#" onClick={(e) => e.preventDefault()}>
              coming soon
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

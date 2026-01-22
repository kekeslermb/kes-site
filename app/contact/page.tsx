export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16" id="contact">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Contact</h1>

        <p className="text-gray-300">The easiest way to reach me:</p>

        <div className="space-y-3 text-gray-300">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              className="underline hover:text-white"
              href="mailto:kekeslermb@gmail.com"
            >
              kekeslermb@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              className="underline hover:text-white"
              href="https://www.linkedin.com/in/keslerbonheur/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/keslerbonheur
            </a>
          </p>

          <p>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              className="underline hover:text-white"
              href="https://github.com/kekeslermb"
              target="_blank"
              rel="noreferrer"
            >
              github.com/kekeslermb
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

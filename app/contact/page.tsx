const APP_URL = "https://app.roz-hr.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-16 text-center">
      <h1 className="mb-3 text-3xl font-bold text-roz-dark">تواصل معنا</h1>
      <p className="mb-8 text-gray-600">
        عندك سؤال، اقتراح، أو بدك تجرّب النظام لشركتك؟ راسلنا مباشرة.
      </p>

      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <a href="mailto:hamza.abu3ayash@gmail.com" className="text-lg font-semibold text-roz-teal hover:underline">
          hamza.abu3ayash@gmail.com
        </a>
      </div>

      <p className="text-sm text-gray-500">
        أو جرّب النظام مباشرة بلا ما تنتظر رد —{" "}
        <a href={`${APP_URL}/register`} className="text-roz-teal hover:underline">
          سجّل شركتك مجاناً
        </a>
        .
      </p>
    </div>
  );
}

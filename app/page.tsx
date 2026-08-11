import Link from "next/link";

const APP_URL = "https://app.roz-hr.com";

const features = [
  { title: "الحضور والانصراف", desc: "تسجيل دخول/خروج بضغطة وحدة، وكشف تأخير تلقائي حسب دوام كل موظف." },
  { title: "الإجازات", desc: "طلب، موافقة أو رفض بضغطة، ورصيد إجازات يتحدّث لحاله." },
  { title: "أدوار وصلاحيات", desc: "مالك، موارد بشرية، مدير، موظف — كل واحد يشوف اللي يخصه بس." },
  { title: "عربي وإنجليزي", desc: "الواجهة كاملة بثنائية لغة، تبديل بضغطة وحدة." },
  { title: "شركتك بمعزل تام", desc: "كل شركة تسجّل حالها، بياناتها معزولة 100% عن أي شركة تانية." },
  { title: "تذكيرات ذكية", desc: "إشعار قبل ٥ دقايق من بداية أو نهاية الدوام لمين نساها." },
];

export default function Home() {
  return (
    <div>
      <section className="bg-roz-dark px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl">إدارة موارد بشرية بسيطة، بالعربي</h1>
          <p className="mt-4 text-lg text-teal-100">
            حضور، إجازات، وبيانات موظفين — كل شي بمكان وحد، بدون تعقيد.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`${APP_URL}/register`}
              className="rounded-md bg-roz-green px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              سجّل شركتك مجاناً
            </a>
            <Link
              href="/status"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              شو وضع المنتج هلأ؟
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-roz-dark">شو فيه بالنظام</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 font-semibold text-roz-dark">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-roz-dark">جرّبه هلأ، بلا التزام</h2>
          <p className="mb-6 text-gray-600">
            تسجيل شركتك يستغرق أقل من دقيقة — إيميلك وكلمة سر بس، وتبلّش فوراً.
          </p>
          <a
            href={`${APP_URL}/register`}
            className="inline-block rounded-md bg-roz-teal px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            سجّل شركتك مجاناً
          </a>
        </div>
      </section>
    </div>
  );
}

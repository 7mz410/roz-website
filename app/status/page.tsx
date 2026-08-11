const doneNow = [
  "الأساس الكامل: شركات متعددة، أدوار، تسجيل ودعوات",
  "الحضور والانصراف بكل تفاصيله",
  "إدارة الإجازات كاملة (طلب، موافقة، رصيد، سجل تدقيق)",
  "إدارة الموظفين (فردي + استيراد دفعة)",
  "ثنائية اللغة (عربي/إنجليزي)",
  "أمان أساسي: تشفير، استرجاع كلمة سر، حماية من السبام",
];

const comingLater = [
  { phase: "المرحلة الجاية", items: ["الرواتب وملف تصدير بنكي", "تكامل حكومي (الضمان الاجتماعي، الضريبة)"] },
  { phase: "بعدها", items: ["نظام توظيف وفرز سير ذاتية (ATS)", "تقارير وتحليلات متقدمة أبعد من كروت المؤشرات الأساسية"] },
  { phase: "لما يصير في داعي فعلي", items: ["واجهة مخصصة بشعار كل شركة (white-label)", "محرك موافقات عام لأنواع طلبات تانية غير الإجازة"] },
];

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="mb-2 text-center text-3xl font-bold text-roz-dark">وين وصلنا؟</h1>
      <p className="mb-10 text-center text-gray-500">بصراحة تامة: هاد منتج MVP — نسخة أولى حقيقية، مبنية بعناية، بس لسا بتكبر.</p>

      <div className="mb-10 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-roz-teal">جاهز ومستخدم فعلياً هلأ</h2>
        <ul className="space-y-2">
          {doneNow.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-gray-700">
              <span className="text-roz-green">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        {comingLater.map((g) => (
          <div key={g.phase} className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-500">{g.phase}</h2>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-gray-300">○</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        عندك اقتراح أو ميزة بدك ياها بأولوية؟ <a href="/contact" className="text-roz-teal hover:underline">تواصل معنا</a>.
      </p>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 mt-10 text-xl font-bold text-roz-dark">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 mt-5 text-base font-semibold text-roz-teal">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm leading-7 text-gray-700">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-3 list-inside list-disc space-y-1.5 text-sm leading-7 text-gray-700">{children}</ul>;
}
function Note({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 rounded-md bg-teal-50 p-3 text-sm text-roz-dark">{children}</div>;
}

export default function ManualPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="mb-2 text-center text-3xl font-bold text-roz-dark">دليل استخدام نظام ROZ</h1>
      <p className="mb-10 text-center text-sm text-gray-500">
        رابط النظام:{" "}
        <a href="https://app.roz-hr.com" className="text-roz-teal hover:underline">
          app.roz-hr.com
        </a>
      </p>

      <P>
        نظام ROZ هو منصة إدارة الموارد البشرية الأساسية للشركة — تسجيل الحضور والانصراف، وطلبات وموافقات
        الإجازات، وإدارة بيانات الموظفين. يعمل النظام بالإنجليزية والعربية، ويمكن التبديل بينهما من زر
        اللغة في أي شاشة.
      </P>

      <H2>١. تسجيل شركة جديدة (لأول مالك/مسؤول)</H2>
      <P>إذا شركتك ما عندها حساب على ROZ أصلاً:</P>
      <UL>
        <li>
          افتح <a href="https://app.roz-hr.com" className="text-roz-teal hover:underline">app.roz-hr.com</a>.
        </li>
        <li>تحت زر تسجيل الدخول، اضغط &quot;أول مرة؟ سجّل شركتك&quot;.</li>
        <li>عبّي: اسم الشركة، اسمك، إيميلك، وكلمة سر (٨ أحرف على الأقل).</li>
        <li>اضغط &quot;إنشاء الشركة والمتابعة&quot;.</li>
      </UL>
      <P>بضغطة وحدة بينعمل تلقائياً: شركة جديدة معزولة تماماً، حسابك كـ مالك (OWNER)، سجل موظف لإلك، وأنواع إجازات افتراضية قابلة للتعديل لاحقاً.</P>

      <H2>٢. تسجيل الدخول</H2>
      <H3>إذا كنت موظف جديد (أول مرة)</H3>
      <UL>
        <li>رح توصلك رسالة إيميل &quot;You&apos;re invited to ROZ&quot; من onboarding@roz-hr.com.</li>
        <li>اضغط على رابط الدعوة داخل الإيميل.</li>
        <li>حدد كلمة سر (٨ أحرف على الأقل) وأكّدها.</li>
      </UL>
      <Note>رابط الدعوة صالح لمدة ٧ أيام ويُستخدم مرة وحدة فقط. اطلب من HR إعادة إرساله لو انتهت صلاحيته.</Note>
      <H3>نسيت كلمة السر؟</H3>
      <P>
        اضغط &quot;نسيت كلمة السر؟&quot; بصفحة تسجيل الدخول، حط إيميلك، وبيوصلك رابط إعادة تعيين صالح لساعة
        وحدة. تغيير كلمة السر بيقفل تلقائياً أي جلسة دخول تانية مفتوحة على أجهزة تانية.
      </P>

      <H2>٣. بوابة الموظف</H2>
      <H3>الرئيسية</H3>
      <P>زر Check In يتحول تلقائياً لـ Check Out. لو سجّلت دخولك متأخر عن دوامك بأكتر من المهلة المسموحة، حالتك بتنسجل &quot;متأخر&quot; تلقائياً.</P>
      <H3>الإجازات</H3>
      <P>طلب إجازة بنموذج واحد، وقائمة بكل طلباتك السابقة مع حالتها.</P>
      <H3>الملف الشخصي</H3>
      <P>بياناتك + زر &quot;تغيير كلمة السر&quot; للتبديل بنفسك بأي وقت.</P>
      <Note>المدير والـ HR والمالك عندهم وصول لنفس بوابة الموظف من زر &quot;تسجيل حضوري&quot; بلوحة التحكم.</Note>

      <H2>٤. لوحة تحكم الأدمن</H2>
      <H3>لوحة القيادة</H3>
      <P>عدد الموظفين، نسبة حضور اليوم، طلبات الإجازة المعلّقة، وآخر نشاط.</P>
      <H3>الموظفون</H3>
      <UL>
        <li>حالة الحساب: مدعو 🟡 / مفعّل 🟢 / انتهت 🔴 / بدون حساب ⚪</li>
        <li>&quot;+ إضافة موظف&quot; فردي، أو &quot;استيراد CSV&quot; لدفعة كاملة دفعة وحدة</li>
        <li>ملف كل موظف: تعديل كامل للبيانات + &quot;إنهاء الخدمة&quot; (يقفل الدخول، يحرر الإيميل، يحافظ على السجل التاريخي)</li>
      </UL>
      <H3>الحضور</H3>
      <P>سجل قابل للفلترة، تصحيح يدوي للقيود، وتصدير CSV.</P>
      <H3>الإجازات</H3>
      <P>موافقة/رفض بضغطة، وتصدير السجل الكامل CSV (مع مين قرر وإمتى).</P>
      <H3>الإعدادات</H3>
      <P>معلومات الشركة، مهلة التأخير بالدقائق، الأقسام، وأنواع الإجازات.</P>

      <H2>٥. الأدوار والصلاحيات</H2>
      <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-semibold text-roz-dark">OWNER</td>
              <td className="px-4 py-2 text-gray-600">كل الشاشات والصلاحيات</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-roz-dark">HR_ADMIN</td>
              <td className="px-4 py-2 text-gray-600">كل شي ما عدا حصريات المالك</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-semibold text-roz-dark">MANAGER</td>
              <td className="px-4 py-2 text-gray-600">فريقه فقط + قرار على إجازاتهم</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-roz-dark">EMPLOYEE</td>
              <td className="px-4 py-2 text-gray-600">بوابته الشخصية فقط</td>
            </tr>
          </tbody>
        </table>
      </div>

      <H2>٦. أسئلة شائعة</H2>
      <H3>موظف ترك الشركة، شو بصير ببياناته؟</H3>
      <P>اضغط &quot;إنهاء الخدمة&quot; من ملفه — دخوله ينقفل فوراً، بياناته التاريخية تضل محفوظة، وإيميله يتحرر فوراً لاستخدامه بشركة تانية على نفس النظام.</P>
      <H3>التذكيرات ما توصلني على آيفون؟</H3>
      <P>لازم تضيف الموقع لشاشتك الرئيسية أولاً: افتح app.roz-hr.com بـ Safari ← زر المشاركة ← Add to Home Screen.</P>

      <p className="mt-10 text-center text-xs text-gray-400">آخر تحديث: أغسطس ٢٠٢٦</p>
    </div>
  );
}

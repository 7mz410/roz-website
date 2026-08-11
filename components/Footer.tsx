export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-gray-400">
        <p>ROZ — نظام إدارة موارد بشرية عربي. © {new Date().getFullYear()}</p>
        <p className="mt-1">
          <a href="https://app.roz-hr.com" className="text-roz-teal hover:underline">
            app.roz-hr.com
          </a>
        </p>
      </div>
    </footer>
  );
}

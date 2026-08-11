import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Invite/reset-password links emailed out before this domain was the
    // marketing site (i.e. anything sent while roz-hr.com was still the app)
    // must keep working — the app now lives at app.roz-hr.com.
    return [
      { source: "/invite/:token", destination: "https://app.roz-hr.com/invite/:token", permanent: false },
      { source: "/reset-password/:token", destination: "https://app.roz-hr.com/reset-password/:token", permanent: false },
    ];
  },
};

export default nextConfig;

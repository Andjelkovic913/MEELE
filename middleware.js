export const config = {
  matcher: "/:path*"
};

export default function middleware(req) {
  const user = process.env.SITE_USER;
  const pass = process.env.SITE_PASS;

  if (!user || !pass) {
    return; // no protection configured, let requests through
  }

  const auth = req.headers.get("authorization");
  if (auth && auth.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6));
    const separatorIndex = decoded.indexOf(":");
    const providedUser = decoded.slice(0, separatorIndex);
    const providedPass = decoded.slice(separatorIndex + 1);
    if (providedUser === user && providedPass === pass) {
      return; // authorized
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Brainrot Forge"' }
  });
}

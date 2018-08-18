// only server, not client, has access to Environmental Variables via `process.env`
export const isProd = process.env.NODE_ENV === 'production';
export const hasWebsockets = !isProd; // FYI: client determines this via `if (window.location.hostname === 'localhost')`

const electronBaseExternals = [
  "clipboard",
  "crash-reporter",
  "electron",
  "ipc",
  "native-image",
  "original-fs",
  "screen",
  "shell",
];

module.exports = {
  electronMainExternals: [
    ...electronBaseExternals,
    "app",
    "auto-updater",
    "browser-window",
    "content-tracing",
    "dialog",
    "global-shortcut",
    "ipc-main",
    "menu",
    "menu-item",
    "power-monitor",
    "power-save-blocker",
    "protocol",
    "session",
    "tray",
    "web-contents",
  ],
  electronRendererExternals: [
    ...electronBaseExternals,
    "desktop-capturer",
    "ipc-renderer",
    "remote",
    "web-frame",
  ],
  electronPreloaderExternals: [
    ...electronBaseExternals,
    "desktop-capturer",
    "ipc-renderer",
    "remote",
    "web-frame",
  ],
  nodeExternals: [
    "assert",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "dns/promises",
    "domain",
    "events",
    "fs",
    "fs/promises",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "path/posix",
    "path/win32",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "stream/promises",
    "stream/web",
    "string_decoder",
    "sys",
    "timers",
    "timers/promises",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "util/types",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib",
    "node:/*",
  ],
};

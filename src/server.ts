declare const require: any;

type IncomingMessage = {
  url?: string;
  method?: string;
};

type ServerResponse = {
  writeHead: (statusCode: number, headers?: Record<string, string>) => void;
  end: (body?: string) => void;
};

const http = require('http');

const PORT = 3333;

const server = http.createServer((_req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: "Bem-vindo à API do DevHabits!",
    status: "online",
    version: "1.0.0"
  }));
});

server.listen(PORT, () => {
  console.log(`[server] HTTP Server running on http://localhost:${PORT}`);
});
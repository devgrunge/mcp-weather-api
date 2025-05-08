const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
import server from "..";


async function bootstrap() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Weather MCP Server running on stdio");
}


bootstrap().catch((error) => {
    console.error(`Fatal error in server: ${error}`)
})

// import loaders from "@/loaders";
import createApp from "@/src/app";
// import config from "./config";

const app = createApp();

// loaders({ expressApp: app });

const config = {
  port: 4040,
};

app
  .listen(config.port, () => {
    console.info(`
      #######################################################################
          🛡️  Server is available at: http://localhost:${config.port} 🛡️
      #######################################################################
    `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

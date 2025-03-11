Cypress.on("uncaught:exception", (err, runnable) => {
  console.warn("Ignoring uncaught exception:", err.message);
  return false;
});

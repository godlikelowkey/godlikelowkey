self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(data.title || "Test", {
      body: data.body || "Hello",
      icon: "/icons/netflix.png"
    })
  );
});

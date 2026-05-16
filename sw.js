self.addEventListener("push", event => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(data.title || "Test", {
      body: data.body || "Hello",
      icon: "/icons/netflix.png"
    })
  );
});

async function enablePush() {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.log("Notifications denied");
    return;
  }

  const reg = await navigator.serviceWorker.ready;

  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "YOUR_PUBLIC_VAPID_KEY"
  });

  console.log("Push subscription:", JSON.stringify(sub));
}

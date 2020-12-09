// Install Service Workers

self.addEventListener("install", (evt) => {
    console.log("Service Worker has been Installed successfully");
  });
  
  // Activate service worker ...
  // Note that: this is not activating the service worker, this is just listening for the activate event.
  
  self.addEventListener("activate", (evt) => {
    console.log("service worker has been activated");
  });
  
  
  
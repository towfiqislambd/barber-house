import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;
const authToken = localStorage.getItem("token");

const echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
  forceTLS: true,
  authEndpoint: `${import.meta.env.VITE_SITE_URL}/api/broadcasting/auth`,
  auth: {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  },
});

export default echo;

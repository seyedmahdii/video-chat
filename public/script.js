const socket = io("/");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

myPeer.on("open", (id) => {
  socket.emit("join-room", roomId, id);
});

socket.on("user-connected", (userId) => {
  console.log("User connected with ID: " + userId);
});

const connectBtn = document.querySelector('#connectBtn');
const disconnectBtn = document.querySelector('#disconnectBtn');
const passwordBtn = document.querySelector('#passwordBtn');
const port_list = document.querySelector('#port-list');

connectBtn.addEventListener('click', async () => {
  const port = port_list.value;
  connectPort(port);
});
disconnectBtn.addEventListener('click', () => {
  disconnect();
});
passwordBtn.addEventListener('click', () => {
  console.log('Pass');
  // frame
});

var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', renderText);
  // this is an instance method
  await client.instance.resize({height: "700px"});
}

async function renderText() {
  const textElement = document.getElementById('apptext');
  const contactData = await client.data.get('contact');
  const {
    contact: { name }
  } = contactData;

  textElement.innerHTML = `Ticket is created by ${name}`;
}

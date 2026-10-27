// Import the express module
import express from 'express';

// Create an instance of an express application
const app = express();

// Define a port number for our server to listen on
const PORT = 3000;

// Create an array to store all incoming orders in the server's memory
const orders = [];

// Enable static file serving (allows the app to find your CSS, images, and JS)
app.use(express.static('public'));

// Add "middleware" to allow the app to parse form data from POST requests
// This allows us to access the form inputs using req.body
app.use(express.urlencoded({ extended: true }));

// Define a default home route ("/")
app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Route to display the contact view page
app.get('/contact-us', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// Route to display the menu page (your custom route)
app.get('/menu', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/menu.html`);
});

// Route to process a pizza order when the user submits the form
app.post('/submit-order', (req, res) => {
  // req.body contains a JSON object of all the form inputs
  const order = req.body;
  
  // Add a timestamp so we know exactly when the order was placed
  order.timestamp = new Date();

  // Log the order to the terminal to verify it works
  console.log("New Order Received:", order);

  // Add the new order object to our orders array
  orders.push(order);

  // Redirect or display the confirmation page to the user
  res.sendFile(`${import.meta.dirname}/views/confirm-order.html`);
});

// Admin route to view all submitted orders in raw JSON format
app.get('/admin', (req, res) => {
    res.send(orders);
});

// Start the server on the designated port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

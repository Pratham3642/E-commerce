# Forever E-commerce Website

This project is a **Full Stack E-commerce Website** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **Stripe** integration for payments. The website allows users to browse products, add them to the cart, and complete purchases securely using Stripe.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Running the Server](#running-the-server)
- [Acknowledgements](#acknowledgements)

## Description

The **Forever E-commerce Website** is a modern e-commerce solution that allows users to shop for products in an easy-to-use interface, powered by React for the frontend and Node.js for the backend. It features:

- **Product browsing**: Display products with images, prices, and descriptions.
- **Shopping cart**: Add/remove items from the cart.
- **Checkout process**: Integration with Stripe to handle payments securely.
- **User authentication**: Users can register, log in, and manage their profiles.
- **Order management**: Admins can manage orders, products, and track user activity.

This project is a great starting point for building custom e-commerce solutions with the MERN stack.

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/forever-ecommerce.git
cd forever-ecommerce
```

### 2. Install Backend Dependencies

Navigate to the backend directory and install the required Node.js dependencies:

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Navigate to the frontend directory and install the required React dependencies:

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

In the root of the project, you will need to create a `.env` file for both the backend and frontend. These files will store sensitive information, such as your Stripe secret key, MongoDB URI, and other environment variables.

#### Backend `.env` Example:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### Frontend `.env` Example:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Usage

After installing the dependencies and configuring the environment variables, you can run the project.

### Running the Frontend:

Open a terminal, navigate to the frontend directory, and run:

```bash
npm run dev
```

### Running the Backend:

Open a terminal, navigate to the backend directory, and run:

```bash
npm run server
```

## Acknowledgements

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Stripe API**: For handling secure payments.
- **React**: For building the user interface.
- **Node.js**: For the backend server.
- **Cloudinary**: For managing and storing media assets.

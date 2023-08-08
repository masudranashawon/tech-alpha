# Tech Alpha: Online Electronics Accessories Store

### What is Tech Alpha?

Tech Alpha is an online electronic accessories store that offers the latest and greatest electronic accessories. Our website features a clean, modern design, an easy-to-use interface, and a robust shopping functionality built using Redux.js. All the product data has been served via the Express.js server and fetched using Axios. Shopping cart functionality has been implemented using Redux.js and cart items are also saved in the local storage of the client’s browser.
<br/>
<br/>

### Features

1.  Built with React, Tailwind CSS, Redux, Axios, Express, MongoDB
2.  Shopping cart functionality has been implemented using Redux.js
3.  All the product data has been served via Express server from MongoDB Database and fetched using Axios
4.  Cart items also saved into the local storage of the client’s browser

### Tools

- [React](https://reactjs.org/): A JavaScript library for building user interfaces and interactive components.
- [Redux Toolkit](https://redux-toolkit.js.org/): A set of tools to simplify Redux development.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.
- [MongoDB](https://www.mongodb.com/): A flexible and scalable NoSQL database for managing data efficiently.

## Installation

To install and configure Tech Alpha, Follow the steps below:

> **Note**
> **You must have Node.js and MongoDB installed on your system!**

Download or clone `Client` &  `Server` both repo and run the following command in the terminal:

1. Clone the `client` repository using

```
git clone https://github.com/masudranashawon/tech-alpha.git
```

2. Clone the `server` repository using

```
git clone https://github.com/masudranashawon/tech-alpha-server.git
```

3. Install the required dependencies in both the `client` and `server` directories by running

```
npm install
```

**Or**

```
npm i
```

<br>

4. Create a `.env` file in the root directory of `server` and add the following variables:

- `MONGO_URI`=the MongoDB connection string


5. Create a `.env` file in the root directory of `client` and add the following variable:

    - `REACT_APP_BASE_URL`=for example `http://localhost:3000`


## Usage
1. Start the `frontend` development server by running

```
npm start
```

2. Start the  `Backend` development server by running

```
npm run dev
```

## Links

- [Live Demo](https://tech-alpha-masud.netlify.app)
- [Front-End Repository](https://github.com/masudranashawon/tech-alpha)
- [Back-End Repository](https://github.com/masudranashawon/tech-alpha-server)

## Contributing

Contributions to Tech Alpha are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Thank you for checking out Learnify!

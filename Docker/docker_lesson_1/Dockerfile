# Use an official Node.js runtime as a parent image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Node.js application code into the container
COPY app2.js /app/app3.js


# Create a simple "Hello, World!" Node.js application
RUN echo "const http = require('http');\n\
const server = http.createServer((req, res) => {\n\
  res.statusCode = 200;\n\
  res.setHeader('Content-Type', 'text/plain');\n\
  res.end('Hello, World!');\n\
});\n\
server.listen(41, '0.0.0.0', () => {\n\
  console.log('Server running on port 41');\n\
});" > app.js

# Expose port 80 for the web server
EXPOSE 41

# Run the Node.js application
CMD ["node", "app3.js"]


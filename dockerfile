# Use an official Node.js runtime as the parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your bot will use (adjust as necessary)
EXPOSE 3000

# Run the bot when the container starts
CMD ["npm", "run", "start:today"]

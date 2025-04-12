# Step 1: Use an official Node.js image as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /Asikh-Nursery

# Step 3: Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Step 4: Install the project dependencies
RUN npm install --legacy-peer-deps

RUN npm install -g serve

# Step 5: Copy the rest of the project files into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Expose port 80 to access the container
EXPOSE 3000

# Step 8: Start Nginx server
CMD ["serve", "-s", "/Asikh-Nursery/build", "-l", "5000"]

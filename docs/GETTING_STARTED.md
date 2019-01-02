# Getting Started

It is very easy to get started, no environment variables or anything are required to start developing.

```bash
# Clone the repository to your own folder
git clone -b master https://github.com/TrimAgency/trim-react-starter.git my-app

# Especially important for TRIM employees!
git remote remove origin

# Add your own git repository (optional)
git remote add origin {your own git repository}

# Install dependencies
yarn

# Rename the application
yarn rename "My New App"

# Start developing!
yarn dev
```

## Production build

```bash
yarn build
yarn start
```

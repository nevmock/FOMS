# Menggunakan image Node.js sebagai base
FROM node:18

# Set direktori kerja
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi
COPY . .

# Build aplikasi
RUN npm run build

# Ekspos port aplikasi
EXPOSE 5173

# Menjalankan aplikasi
CMD ["npm", "run", "preview"]
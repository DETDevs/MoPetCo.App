# 🐾 MoPetCo - Mobile Pet Grooming Web Platform

MoPetCo is a modern web application that allows users to book pet grooming appointments online, explore services, contact support, and enjoy a seamless pet care experience. Built for a mobile grooming business operating in South Florida, it delivers a high-quality user experience and professional design.

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Backend**: ASP.NET Core (.NET 6/8)
- **Database**: SQL Server
- **Hosting & Analytics**:
  - Google Analytics (via gtag.js)
  - Google reCAPTCHA for form validation

## 🎯 Key Features

- 🐶 Clean and responsive landing page
- 🛁 Full list of grooming services with detailed descriptions
- 🗓️ Appointment booking form (validated with reCAPTCHA)
- 🏷️ Offers and discounts for new customers
- 🌍 Bilingual support (English & Spanish)
- ⭐ Customer reviews (Google-style cards)
- 📞 Contact form with live support numbers
- 📊 Google Analytics integration for tracking
- 🌐 SEO-ready with Open Graph & Twitter meta tags

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mopetco.git
cd mopetco

npm install

npm run dev

dotnet run

## 📂 Project Structure

mopetco/
├── public/
│   ├── assets/
│   │   ├── og-image.jpg
│   │   └── ...
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── style/
│   └── main.tsx
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   └── Program.cs


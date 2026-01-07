# 🧶 Riddhi’s Creation — Handcrafted Crochet Studio

A calm, premium, content-driven website built for a handcrafted crochet brand.  
Designed as a **luxury digital lookbook**, not an e-commerce platform.

This project focuses on **storytelling, visual elegance, smooth animations, and CMS-driven content**.

---

## 🌿 Project Overview

**Riddhi’s Creation** is a modern web experience for a handmade crochet studio where:

- ❌ No cart
- ❌ No payments
- ❌ No user login
- ✅ WhatsApp inquiries only
- ✅ Admin-friendly content management
- ✅ Animation-rich, emotionally immersive UI

The goal is to digitally recreate the feel of a **slow, handcrafted artisan studio**.

---

## 🧱 Tech Stack

### 🎨 Frontend (Crochet Studio)
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS v3**
- **GSAP (ScrollTrigger)** for cinematic scroll animations
- **Sanity CMS (Headless)**
- **Vercel** for deployment

### 🧠 CMS (Sanity Studio)
- Sanity v3
- Structured schemas
- Singleton documents for global content
- Real-time content publishing

---

## 📁 Repository Structure

Crocheting/
│
├─ crochet-studio/ # Frontend (Next.js)
│ ├─ src/
│ │ ├─ app/
│ │ ├─ components/
│ │ ├─ lib/
│ │ ├─ animations/
│ │ └─ styles/
│ ├─ public/
│ ├─ tailwind.config.js
│ ├─ next.config.ts
│ └─ package.json
│
├─ sanity/ # Sanity CMS
│ ├─ schemas/
│ ├─ sanity.config.ts
│ └─ package.json
│
└─ README.md


---

## ✨ Key Features

### 🧵 Frontend
- Full-screen hero with poetic branding
- CMS-driven **About / Story section**
- Dynamic **Collections showcase**
- Product detail modal (no pricing)
- **Recent Orders** as social proof
- Floating **WhatsApp CTA**
- Smooth GSAP scroll animations
- Fully responsive (mobile-first)

### 🧠 CMS (Sanity)
- Global **Site Settings** (singleton)
- Editable About section
- Unlimited collections
- Recent orders / completed work
- Image uploads with hotspot support
- Visibility toggles
- No layout or code breaking from content edits

---

## 🗂️ Sanity Content Models

### 🔹 Site Settings (Singleton)
- Brand name
- Tagline
- WhatsApp number
- SEO title & description
- SEO image

### 🔹 About Section
- Section title
- Rich text story
- Image
- Single editable document

### 🔹 Collections
- Title
- Category (Bags, Clothing, Home Décor, Custom Orders)
- Image gallery
- Description
- Customization note
- Visibility toggle
- Display order

### 🔹 Recent Orders
- Title
- Caption
- Image
- Location (optional)
- Order date
- Visibility toggle
- Optional reference to a collection

---

## 🚀 Environment Variables

Create a `.env.local` file inside `crochet-studio`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

NEXT_PUBLIC_WHATSAPP_FALLBACK=91XXXXXXXXXX

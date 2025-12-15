🧵 Crochet Studios

✨ A cinematic, content-driven handcrafted crochet brand website

    This project is a high-end, animation-rich showcase website for a handcrafted crochet brand.
    It is not an ecommerce platform — the focus is on storytelling, visual calm, and WhatsApp-only conversion.

    Built using Next.js + Sanity CMS + GSAP, following modern industry standards.

✨ Project Goals

    🎨 Deliver an emotionally immersive, luxury lookbook experience

    🧶 Showcase crochet collections like an artisan gallery

    📸 Display recent orders as social proof

    💬 Convert visitors only via WhatsApp

    🔐 Allow admin-only content updates without breaking UI or animations

    🧱 Keep the UI locked and content fully dynamic

🚫 What This Project Is NOT

    ❌ No payment gateway

    ❌ No cart or checkout

    ❌ No user login or authentication

    ❌ No pricing logic

    ➡️ This is an artisan brand website, not an ecommerce store.

🏗️ Architecture Overview
```
Sanity CMS (Admin)
   ↓
Next.js (Static / Server Components)
   ↓
Locked React UI
   ↓
GSAP Scroll Animations
   ↓
WhatsApp Conversion
```

🧰 Tech Stack
  🎨 Frontend

    ⚛️ Next.js (App Router)

    ⚛️ React 18

    🟦 TypeScript

    🎨 Tailwind CSS v3

    🎞️ GSAP + ScrollTrigger

  🧠 CMS

    🗂️ Sanity v3 (Headless CMS)

    🧩 Custom schemas

    🔒 Singleton global settings

    🛠️ Admin-safe content editing

  🚀 Deployment (planned)

    ▲ Vercel (frontend)

    ☁️ Sanity Cloud (CMS)

📁 Repository Structure (Monorepo)
```
Crocheting/
├─ crochet-studio/     # Next.js frontend
└─ sanity/             # Sanity CMS studio
```

🧵 Frontend Structure (crochet-studio/)
```
src/
├─ app/                # Next.js App Router
├─ components/         # Locked UI components
├─ animations/         # GSAP animation helpers
├─ lib/                # Sanity client & GROQ queries
├─ types/              # TypeScript models
└─ utils/              # Helper utilities
```

🔑 Key Principles

    🔒 UI components never contain hardcoded content

    🧠 All text & images come from Sanity CMS

    🎞️ Animations are content-agnostic

    ⚖️ Server & client components are properly separated

🧠 CMS Structure (sanity/)
📦 Content Models

   ⚙️ Site Settings (Singleton)

    🏷️ Brand name

    ✍️ Tagline

    💬 WhatsApp number

🧶 Collections

    📂 Category title

    🖼️ Image

    👁️ Visibility toggle

    🔢 Display order

📸 Recent Orders

    🖼️ Image

    📝 Caption

    📍 Location

    🔢 Display order

✅ CMS Guarantees

    🛠️ Admin can update content without touching code

    🔒 Only one Site Settings document exists

    🧱 Content changes never break UI or animations

🔒 Content Safety Model
| Layer              | Editable         |
| ------------------ | ---------------- |
| 🧱 UI / Layout     | ❌ Locked         |
| 🎞️ Animations     | ❌ Locked         |
| 🧠 Content         | ✅ CMS-controlled |
| 💬 WhatsApp Number | ✅ CMS-controlled |

💬 WhatsApp-Only Conversion

```
📞 WhatsApp number managed via Sanity Site Settings

🚫 No hardcoded phone numbers

🛟 Optional .env fallback for safety

🎯 Clean, distraction-free CTA
```

🚀 Local Development
🎨 Frontend
```
cd crochet-studio
npm install
npm run dev
```


➡️ Runs at: http://localhost:3000

🧠 Sanity CMS
```
cd sanity
npm install
npm run dev
```


➡️ Runs at: http://localhost:3333

🔐 Environment Variables

Environment files are not committed.

Example:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_WHATSAPP_FALLBACK=919999999999
```
📈 Current Status
```
✅ Sanity Studio configured

✅ Singleton Site Settings implemented

✅ CMS-driven Hero section

✅ CMS-driven WhatsApp CTA

✅ Proper server/client component split

⏳ Collections animations (in progress)

⏳ Recent orders timeline (in progress)
```
🎯 Future Enhancements
```
🎞️ GSAP stagger animations for collections

🖼️ Product detail modal with gallery

💬 Floating WhatsApp CTA

⚡ Image optimization with next/image

🔍 SEO metadata from CMS

🚀 Production deployment on Vercel

🧠 Learning & Architecture Focus
```
This project demonstrates:
```
🧱 Real-world Next.js App Router architecture

⚖️ Proper server vs client component separation

🧠 CMS-driven design systems

🔐 Admin-safe content scaling

🧹 Production-ready Git practices
```
👤 Author
```
Leander
💻 Frontend / Full-Stack Developer
🎯 Focused on modern React, Next.js, and content-driven systems
```

<div align="center">

# 🏨 React Hotel Website

### A full-stack luxury cabin booking platform built with the latest Next.js App Router architecture

<br/>

[![Tech Stack](https://skills.syvixor.com/api/icons?i=nextjs,react,ts,tailwindcss,supabase,authjs,datefns&perline=8)](https://builder.syvixor.com)

</div>

---

## 📖 Overview

**React Hotel** is a luxury cabin hotel booking website where guests can browse cabins, pick dates, and reserve their stay — all in a seamless, modern UI. Authentication is handled via Google OAuth, and all data is persisted in Supabase.

The project is fully **responsive** — optimised for mobile, tablet, and desktop — and built entirely with **React Server Components**, **Server Actions**, and zero client-side data fetching.

---

## ✨ Features

- 🏡 **Browse Cabins** — View all available luxury cabins with images, capacity, and pricing
- 🔍 **Filter Cabins** — Filter by guest capacity: Small / Medium / Large
- 📅 **Date Picker** — Interactive calendar with booked dates blocked out
- 💳 **Book a Cabin** — Select dates, choose number of guests, submit a booking
- 🔐 **Google Sign-In** — One-click OAuth login via NextAuth v5
- 👤 **Guest Account** — Manage your profile, nationality, and national ID
- 📋 **My Bookings** — View all upcoming and past reservations
- ✏️ **Edit Booking** — Update guests count and observations on upcoming bookings
- 🗑️ **Delete Booking** — Cancel an upcoming booking
- ✅ **Thank You Page** — Confirmation screen after a successful booking
- 📱 **Fully Responsive** — Mobile-first design with animated full-screen hamburger nav

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| <img src="https://skills.syvixor.com/api/icons?i=nextjs" height="40" /> **Next.js 16** | Full-stack framework — App Router, SSR, Server Actions |
| <img src="https://skills.syvixor.com/api/icons?i=react" height="40" /> **React 19** | UI library — Server & Client Components |
| <img src="https://skills.syvixor.com/api/icons?i=ts" height="40" /> **TypeScript** | Type safety across the entire codebase |
| <img src="https://skills.syvixor.com/api/icons?i=tailwindcss" height="40" /> **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| <img src="https://skills.syvixor.com/api/icons?i=supabase" height="40" /> **Supabase** | PostgreSQL database + file storage |
| <img src="https://skills.syvixor.com/api/icons?i=authjs" height="40" /> **NextAuth v5** | Authentication with Google OAuth provider |
| <img src="https://skills.syvixor.com/api/icons?i=googlecloud" height="40" /> **Google OAuth** | Social login provider |
| <img src="https://skills.syvixor.com/api/icons?i=datefns" height="40" /> **date-fns** | Date formatting and manipulation |

---

## 🏗️ Architecture

This project uses the **Next.js App Router** pattern — a modern full-stack monolith where the server and client are tightly integrated with no separate API layer.

```
┌─────────────────────────────────────────┐
│              Browser (Client)           │
│  Client Components  ("use client")      │
│  · DateSelector     · SideNav           │
│  · BookingForm      · MobileNavMenu     │
└────────────────────┬────────────────────┘
                     │  RSC payload / Server Actions
┌────────────────────▼────────────────────┐
│            Next.js Server               │
│                                         │
│  Server Components  (async, no bundle)  │
│  · CabinList   · Navigation             │
│  · Booking     · BookingCard            │
│                                         │
│  Server Actions  (mutations)            │
│  · createBookingAction                  │
│  · updateBookingAction                  │
│  · deleteBookingAction                  │
│  · updateProfileAction                  │
└────────────────────┬────────────────────┘
                     │  Supabase JS SDK
┌────────────────────▼────────────────────┐
│        Supabase  (PostgreSQL)           │
│  Tables: cabins · bookings              │
│          guests · settings              │
└─────────────────────────────────────────┘
```

### Key Principles
- **Zero client-side data fetching** — all reads happen in async Server Components
- **Server Actions** replace API routes for all mutations
- **React Context** is used only for lightweight client state (date range selection)
- **NextAuth middleware** protects all `/account/*` routes automatically

---

## 📁 Project Structure

```
react-hotel-website/
├── app/
│   ├── _components/              # Shared UI components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileNavMenu.tsx     # Animated full-screen mobile nav
│   │   ├── CabinCard.tsx
│   │   ├── CabinInfo.tsx
│   │   ├── CabinList.tsx
│   │   ├── Booking.tsx
│   │   ├── BookingCard.tsx
│   │   ├── BookingForm.tsx
│   │   ├── DateSelector.tsx
│   │   ├── SideNav.tsx
│   │   ├── UpdateProfileForm.tsx
│   │   ├── Filter.tsx
│   │   ├── Logo.tsx
│   │   ├── SignInButton.tsx
│   │   ├── SignOutButton.tsx
│   │   ├── SubmitButton.tsx
│   │   ├── Spinner.tsx
│   │   └── ComponentsTypes.ts    # All shared TypeScript interfaces
│   │
│   ├── _services/                # Data layer (server-only)
│   │   ├── actions.ts            # All Server Actions (mutations)
│   │   ├── apiCabins.ts
│   │   ├── apiBookings.ts
│   │   ├── apiGuest.ts
│   │   ├── apiSettings.ts
│   │   ├── apiCountries.ts
│   │   ├── auth.ts               # NextAuth config + Google OAuth
│   │   └── supabase.ts           # Supabase client
│   │
│   ├── _context/                 # React Context (client state)
│   │   ├── BookingProvider.tsx
│   │   ├── useBooking.ts
│   │   └── contextTypes.ts
│   │
│   ├── _styles/
│   │   ├── global.css
│   │   └── tailwind.config.ts
│   │
│   ├── _utils/
│   │   └── helpers.ts
│   │
│   ├── about/page.tsx            # /about
│   ├── cabins/
│   │   ├── page.tsx              # /cabins
│   │   ├── loading.tsx
│   │   ├── thankyou/page.tsx     # /cabins/thankyou
│   │   └── [cabinId]/page.tsx   # /cabins/:id
│   ├── account/
│   │   ├── layout.tsx            # Account shell with sidebar
│   │   ├── page.tsx              # /account
│   │   ├── profile/page.tsx      # /account/profile
│   │   └── bookings/
│   │       ├── page.tsx          # /account/bookings
│   │       └── edit/[bookingId]/page.tsx
│   ├── login/page.tsx            # /login
│   ├── api/auth/[...nextauth]/   # NextAuth route handler
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
│
├── public/
│   ├── bg.png
│   ├── about-1.jpg
│   └── about-2.jpg
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `18+`
- A [Supabase](https://supabase.com) project with the tables below
- A [Google Cloud](https://console.cloud.google.com) OAuth 2.0 application

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-hotel-website.git
cd react-hotel-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Google OAuth (via NextAuth)
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# NextAuth
AUTH_SECRET=your_random_secret_string
```

> 💡 Generate `AUTH_SECRET` by running: `openssl rand -base64 32`

### 4. Set up the Supabase database

Run the following SQL in your Supabase SQL editor:

```sql
create table cabins (
  id bigint primary key generated always as identity,
  name text,
  "maxCapacity" int,
  "regularPrice" int,
  discount int,
  description text,
  image text
);

create table guests (
  id bigint primary key generated always as identity,
  "fullName" text,
  email text unique,
  nationality text,
  country text,
  "countryFlag" text,
  "nationalID" text
);

create table bookings (
  id bigint primary key generated always as identity,
  created_at timestamptz default now(),
  "startDate" date,
  "endDate" date,
  "numNights" int,
  "numGuests" int,
  "cabinPrice" numeric,
  "extrasPrice" numeric,
  "totalPrice" numeric,
  observations text,
  status text default 'unconfirmed',
  "hasBreakfast" boolean default false,
  "isPaid" boolean default false,
  "cabinID" bigint references cabins(id),
  "guestID" bigint references guests(id)
);

create table settings (
  id bigint primary key generated always as identity,
  "minBookingLength" int,
  "maxBookingLength" int,
  "maxNumberGuestsPerBooking" int,
  "breakfastPrice" numeric
);
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🗺️ Pages & Routes

| Route | Description | Auth Required |
|---|---|:---:|
| `/` | Landing page with hero image | ❌ |
| `/about` | About the hotel | ❌ |
| `/cabins` | Browse & filter all cabins | ❌ |
| `/cabins/[cabinId]` | Cabin detail + booking form | ❌ |
| `/cabins/thankyou` | Post-booking confirmation | ❌ |
| `/login` | Google sign-in page | ❌ |
| `/account` | Guest dashboard | ✅ |
| `/account/bookings` | All guest bookings | ✅ |
| `/account/bookings/edit/[id]` | Edit an upcoming booking | ✅ |
| `/account/profile` | Update profile & nationality | ✅ |

---

## 🔒 Authentication Flow

```
1. Guest clicks "Sign in with Google"
        ↓
2. Google OAuth consent screen
        ↓
3. NextAuth signIn callback fires
        ↓
4. Check if guest exists in Supabase
   └── Not found → create new guest row
        ↓
5. Guest ID attached to session
        ↓
6. All /account/* routes auto-protected by NextAuth middleware
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| `< 640px` (mobile) | Single column, full-screen animated hamburger menu, stacked calendar |
| `640px – 768px` (sm) | Wider cards, horizontal booking cards |
| `768px – 1024px` (md) | Two-column cabin grid, sidebar account navigation |
| `> 1024px` (desktop) | Full layout with all original proportions and spacing |

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

<div align="center">

Made with ❤️ by **Josef** &nbsp;·&nbsp; Powered by [Next.js](https://nextjs.org) & [Supabase](https://supabase.com)

</div>

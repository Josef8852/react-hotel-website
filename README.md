<div align="center">

# 🏨 React Hotel — The Wild Oasis

### A full-stack luxury cabin booking platform built with the latest Next.js App Router architecture

<br/>

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Google](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

---

## 📖 Overview

**The Wild Oasis** is a luxury cabin hotel booking website where guests can browse cabins, pick dates, and reserve their stay — all in a seamless, modern UI. Authentication is handled via Google OAuth, and all data is persisted in Supabase.

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
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white) **Next.js 16** | Full-stack framework — App Router, SSR, Server Actions |
| ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) **React 19** | UI library — Server & Client Components |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) **TypeScript** | Type safety across the entire codebase |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white) **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) **Supabase** | PostgreSQL database + file storage |
| ![NextAuth](https://img.shields.io/badge/NextAuth_v5-7C3AED?logo=auth0&logoColor=white) **NextAuth v5** | Authentication with Google OAuth provider |
| ![date-fns](https://img.shields.io/badge/date--fns-F9A8D4?logo=javascript&logoColor=black) **date-fns** | Date formatting and manipulation |
| ![react-day-picker](https://img.shields.io/badge/react--day--picker-F97316?logo=react&logoColor=white) **react-day-picker** | Accessible, customisable calendar component |
| ![Heroicons](https://img.shields.io/badge/Heroicons-1D4ED8?logo=tailwindcss&logoColor=white) **Heroicons** | Beautiful SVG icons by the Tailwind CSS team |

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

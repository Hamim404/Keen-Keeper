# 🌿 KeenKeeper

**Friends to keep close in your life.**

Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)


---

## 📖 About

KeenKeeper is a relationship-tracking web app that helps you stay in touch with the people you care about. Set a contact goal for each friend, see at a glance who is on track and who needs attention, and keep a history of every call, text, video chat and meetup, so no friendship quietly slips away.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Framework, routing, layouts, loading and error pages |
| [React](https://react.dev/) + JSX | Component-based UI |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | UI components and a custom `keenkeeper` theme |
| [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) | Typography, loaded with `next/font` |
| JSON | Friend profile data (`friends.json`) |

## ✨ Key Features

1. **📊 Friends dashboard**
   See every friend as a card with their photo, tags and a colour-coded status badge (**On-Track**, **Almost Due** or **Overdue**), plus summary stats for total friends, friends on track, and friends who need attention.

2. **👤 Friend details and goals**
   Open a friend's profile to see days since last contact, their contact goal, the next due date and a short bio. Quick check-in options for call, text and video are one click away, along with snooze, archive and delete actions.

3. **🕒 Interaction timeline**
   A chronological timeline of every call, text, video chat and meetup, with a filter so you can look back at how you have stayed connected.

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/keenkeeper.git
cd keenkeeper

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> The home page loads friends from `/friends.json`, so keep that file inside the `public/` folder.

---

Made with 💚 to keep friendships close.

import UserInfo from "./components/userInfo";

// app/page.tsx or pages/index.tsx (Server Component)
export default function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <UserInfo /> {/* Client Component */}
    </div>
  );
}


import ProfileCard from "./components/ProfileCard";

// 1. 定义数据类型 (必须和 API 返回的长得一样)
interface UserProfile {
  id: number;
  name: string;
  title: string;
  tags: string[];
  imageUrl: string;
}

// 2. 这是一个异步组件 (async)，可以直接在服务器端获取数据
export default async function Home() {
  
  // 3. 向我们刚才写的 API 发起请求
  // 注意：在服务器端组件里 fetch 必须写完整 URL
  // 真实上线时通常用 process.env.URL，这里简化处理直接写 localhost
  const res = await fetch('https://quaid-lovat.vercel.app/api/users', {
    cache: 'no-store' // 确保每次刷新都拿最新数据，不缓存
  });
  
  const users: UserProfile[] = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-800">
        我的接单团队 ({users.length}人)
      </h1>

      {/* 4. 网格布局：自动适应屏幕 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* 5. 循环渲染 (Map)：数据有多少条，就生成多少个卡片 */}
        {users.map((user) => (
          <ProfileCard 
            key={user.id} // React 循环必须加 key，且要唯一
            name={user.name}
            title={user.title}
            tags={user.tags}
            imageUrl={user.imageUrl}
          />
        ))}

      </div>
    </div>
  );
}
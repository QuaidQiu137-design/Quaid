import { NextResponse } from 'next/server';

// 1. 模拟数据库里的数据 (真实项目中，这里会连接 MySQL 或 MongoDB)
const fakeDatabase = [
  {
    id: 1,
    name: "Mikey Chen",
    title: "全栈开发工程师",
    tags: ["Next.js", "Python", "Cursor"],
    imageUrl: "https://avatars.githubusercontent.com/u/583231?v=4" 
  },
  {
    id: 2,
    name: "Elon Musk",
    title: "SpaceX CEO",
    tags: ["Mars", "Rocket", "Tesla"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
  },
  {
    id: 3,
    name: "Quaid qiu",
    title: "广外高育良",
    tags: ["Student", "FullStack", "GDUFS"],
    imageUrl: "/me.jpg" // 你的本地图片
  },
  {
    id: 4,
    name: "AI Robot",
    title: "虚拟员工",
    tags: ["GPT-4", "Transformer"],
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=robot" // 这是一个自动生成头像的 API
  },
  {
    id: 5,
    name: "Quu",
    title: "广外高良",
    tags: ["Student", "FullStack", "GDUFS"],
    imageUrl: "/me.jpg" // 你的本地图片
  },
];

// 2. 定义 GET 请求的处理逻辑
export async function GET() {
  // 模拟网络延迟 (让这种加载感更真实，可选)
  // await new Promise(resolve => setTimeout(resolve, 1000));
  
  return NextResponse.json(fakeDatabase);
}
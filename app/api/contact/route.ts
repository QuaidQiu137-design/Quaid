import { NextResponse } from 'next/server';
import { orders } from '@/lib/data'; // 引入我们的临时数据库

// 1. 处理 GET 请求：管理员来查单子了
export async function GET() {
  return NextResponse.json(orders);
}

// 2. 处理 POST 请求：用户来下单了
export async function POST(request: Request) {
  const body = await request.json();
  
  // 给每个订单加个时间戳
  const newOrder = {
    id: Date.now(), // 用时间做唯一ID
    targetName: body.targetName,
    date: new Date().toLocaleString(),
    status: 'pending' // 默认状态：待处理
  };

  // 存入“数据库”
  orders.push(newOrder);
  
  // 在终端也打印一下（双重保险）
  console.log("新订单已存入内存:", newOrder);

  return NextResponse.json({ success: true });
}
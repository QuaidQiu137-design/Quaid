'use client';  // 👈 1. 它必须是老大，放在第一行！
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // 👈 2. 引入放在它下面
import React from 'react';

// ... 下面是 Interface 和组件代码

// 1. 定义接口 (Interface)：相当于告诉组件“你需要接收哪些数据”
// 这就是 TypeScript 强大的地方，防止你传错数据
interface ProfileCardProps {
  name: string;      // 名字
  title: string;     // 职位
  tags: string[];    // 技能标签 (数组)
  imageUrl: string;  // 头像链接
}

// 2. 在函数参数里接收这些数据 ({ name, title... })
export default function ProfileCard({ name, title, tags, imageUrl }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-sm border border-gray-100 mx-auto">
      {/* 使用变量：用 { } 把 imageUrl 包起来 */}
      <img 
        className="w-24 h-24 rounded-full mb-4 object-cover shadow-md" 
        src={imageUrl} 
        alt={name} 
      />
      
      {/* 使用变量：name */}
      <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-500 mb-4 text-sm">{title}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {/* 使用 map 循环：把 tags 数组里的每一项变成一个 span */}
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="px-3 py-1 text-sm hover:bg-slate-200">
          {tag}
        </Badge>
        ))}
      </div>

        {/* 使用 Shadcn 的 Button 组件 */}
        {/* w-full 让按钮撑满宽度，className 可以继续叠加 Tailwind */}
        <Button 
        className="w-full bg-slate-900 hover:bg-slate-700 text-white shadow-sm"
        // 👇 把 onClick 变成异步函数 (async)
        onClick={async () => {
            // 1. 告诉用户正在发送 (可选优化：甚至可以让按钮变灰 loading)
            // alert("正在连接服务器..."); 

            try {
                // 2. 发起真实的网络请求 (POST)
                const res = await fetch('/api/contact', {
                    method: 'POST', // 动作：提交
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // 包裹：把要发的数据打包成 JSON 字符串
                    body: JSON.stringify({ 
                        targetName: name, 
                        action: "click_contact" 
                    })
                });

                // 3. 等待服务器回应
                if (res.ok) {
                    alert(`✅ 成功！后台已收到针对 ${name} 的联系请求！`);
                } else {
                    alert("❌ 发送失败，请稍后再试");
                }

            } catch (error) {
                console.error("网络错误", error);
                alert("网络出错了");
            }
        }}
      >
        联系开发者
      </Button>
    </div>
  );
}
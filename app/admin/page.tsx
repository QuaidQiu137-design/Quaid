// src/app/admin/page.tsx
// 这个页面一定要设置成动态的，不能缓存，否则你看不到最新数据
export const dynamic = 'force-dynamic';

interface Order {
  id: number;
  targetName: string;
  date: string;
}

export default async function AdminPage() {
// ✅ 正确代码：连接云端接口
const res = await fetch('https://quaid-lovat.vercel.app/api/contact', {
    cache: 'no-store'
  });
  const orders: Order[] = await res.json();

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">后台管理系统</h1>
          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            订单总数: {orders.length}
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white p-10 rounded-xl text-center text-gray-500 shadow-sm">
            📭 暂时没有新订单，快去前台点几个按钮试试！
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* 简单的表格布局 */}
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-semibold text-slate-600">订单 ID</th>
                  <th className="p-4 font-semibold text-slate-600">想要联系谁</th>
                  <th className="p-4 font-semibold text-slate-600">提交时间</th>
                  <th className="p-4 font-semibold text-slate-600">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500 text-sm">#{order.id}</td>
                    <td className="p-4 font-medium text-slate-900">{order.targetName}</td>
                    <td className="p-4 text-slate-500">{order.date}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                        待处理
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-8 text-center">
            <a href="/" className="text-blue-500 hover:underline">⬅️ 返回前台首页</a>
        </div>
      </div>
    </div>
  );
}
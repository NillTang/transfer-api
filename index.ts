name = "transfer-api"
main = "src/index.ts"
compatibility_date = "2024-01-01" # 建議設定為當前日期
export default {
  async fetch(request, env, ctx) {
    return new Response("部署成功！API 代理伺服器已啟動。", { status: 200 });
  },
};

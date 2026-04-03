export default function ZorynnexLandingPage() {
  const brandPoints = [
    {
      title: '品牌定位',
      desc: 'ZORYNNEX 以童礼风尚为核心，融合仪式感、时尚感与童真表达，打造更有记忆点的儿童礼服品牌形象。',
    },
    {
      title: '视觉气质',
      desc: '整体风格偏轻奢、现代、精致，适合用于品牌官网首屏、招商展示、品牌介绍与名片页落地。',
    },
    {
      title: '应用方向',
      desc: '可覆盖儿童礼服、花童服饰、宴会穿搭、庆典造型、节日系列等多个场景。',
    },
  ];

  const keywords = ['童礼风尚', '儿童礼服', '精致审美', '仪式穿搭', '品牌官网'];

  const categories = [
    '儿童礼服',
    '花童系列',
    '宴会穿搭',
    '节庆造型',
    '品牌联名',
    '定制系列',
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ee] text-neutral-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),rgba(247,243,238,0.55),rgba(232,223,214,0.8))]" />
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-[#d9c7b4]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm tracking-[0.18em] text-neutral-700 backdrop-blur">
                ZORYNNEX · BASIC BRAND LANDING PAGE
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                为 <span className="italic">ZORYNNEX</span>
                <br />
                打造更有辨识度的
                <span className="block text-neutral-600">童礼风尚品牌形象</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
                面向儿童礼服与仪式感穿搭场景，建立一个兼顾品牌气质、基础信息展示与后续招商延展的落地页框架。
                适合作为 zorynnex.com 首页初版、品牌介绍页或对外展示入口。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {keywords.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-neutral-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5">
                  了解品牌
                </button>
                <button className="rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur transition hover:-translate-y-0.5">
                  联系合作
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#ece3d9] via-[#f8f4ef] to-[#d9c7b4] p-7 md:p-8">
                  <div className="rounded-[1.5rem] border border-white/60 bg-white/60 p-6 shadow-inner backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">Brand Snapshot</div>
                    <div className="mt-5 text-3xl font-semibold tracking-[0.18em] md:text-4xl">ZORYNNEX</div>
                    <div className="mt-3 h-px w-full bg-black/10" />
                    <dl className="mt-6 space-y-4 text-sm text-neutral-700">
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>品牌方向</dt>
                        <dd className="text-right font-medium text-neutral-900">童礼风尚服饰</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>展示用途</dt>
                        <dd className="text-right font-medium text-neutral-900">官网首页 / 品牌页</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>域名</dt>
                        <dd className="text-right font-medium text-neutral-900">zorynnex.com</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>商标持有人</dt>
                        <dd className="text-right font-medium text-neutral-900">苏州童礼风尚服饰有限公司</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {brandPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-black/5 bg-white/80 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur"
            >
              <div className="mb-4 text-sm tracking-[0.2em] text-neutral-500">0{brandPoints.indexOf(item) + 1}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">About The Brand</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              一个适合持续生长的
              <span className="block text-neutral-600">基础品牌信息页</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              当前页面以“基础品牌展示”为目标，优先建立品牌名称、风格定位、核心品类与品牌归属信息的清晰表达。
              后续可继续扩展产品系列、Lookbook、门店信息、招商加盟、新闻动态与表单收集模块。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((item) => (
              <div
                key={item}
                className="group rounded-[1.6rem] border border-black/5 bg-white/85 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-sm tracking-[0.22em] text-neutral-400">CATEGORY</div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <h3 className="text-xl font-medium">{item}</h3>
                  <div className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">Z</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-neutral-900 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Brand Footer</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">ZORYNNEX</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                zorynnex.com 基础品牌信息页示意。
                可作为品牌官网首页雏形，也可进一步升级为带产品展示、询盘表单与 SEO 文案结构的完整官网页面。
              </p>
            </div>

            <div className="space-y-2 text-sm text-white/70">
              <div>商标持有人：苏州童礼风尚服饰有限公司</div>
              <div>站点域名：zorynnex.com</div>
              <div>品牌关键词：童礼风尚 / 儿童礼服 / 仪式穿搭</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

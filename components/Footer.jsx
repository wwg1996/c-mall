import Image from 'next/image'

import { Icons, Services, LogoChina, ResponsiveImage } from 'components'
import { siteTitle } from '@/utils'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-4 mt-8 border-t border-gray-200 bg-gray-50">
      <div className="container px-3  space-y-8 mx-auto ">
        {/* Logo & scroll to top */}
        <div className="flex justify-between">
          <div>
            <LogoChina className="w-32 h-10 mb-6" />
            <div className="flex flex-col gap-y-2 lg:flex-row lg:space-x-5">
              <span>此网站为展示用，有外包需要欢迎联系我</span>
              <span className="hidden lg:block bg-gray-300 w-[2px]" />
              <span>我的微信：wangc_20171010</span>
            </div>
          </div>
          <div className="min-w-max">
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center px-3 py-1 border border-gray-300 rounded-md"
            >
              <span className="text-sm ">回到顶部</span>
              <Icons.ArrowUp className="text-gray-400 h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Services />
        </div>

        {/* info */}
        <div className="space-y-6 lg:flex lg:justify-between">
          <div className="space-y-3 lg:max-w-2xl">
            <h5 className="font-semibold text-black">{siteTitle}在线商店，在线评价、选择和购买</h5>
            <p className="text-justify text-gray-700">
              安全的网购需要店铺能够在短时间内为顾客提供多样、优质、价格合理的商品，并有退货保障；
              {siteTitle}。在线商店多年来一直在努力开发的功能，并通过这种方式拥有了固定客户
            </p>
          </div>

          <div className="flex justify-center gap-x-2"></div>
        </div>
      </div>

    </footer>
  )
}

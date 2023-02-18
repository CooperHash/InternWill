import { Link } from "@remix-run/react";
export default function Index() {
  const code = "const a = 'Hello, world!'\nimport react from 'react';\n<Code/>";
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>


      <div className="w-screen h-screen">
        <h1 className="hero-eyebrow mt-[88px] w-4/5 mx-auto text-center font-semibold leading-8 text-xl tracking-wider">
          Intern&nbsp;Will</h1>
        <div className="hero-copy font-sans text-7xl font-bold w-4/5 text-center mx-auto mt-[13px]">Make Interview Be Detail
        </div>
        <div className="flex flex-row w-4/5 mx-auto mt-[150px] space-x-5">
          <div className="item flex-1">
            <h2 className="break-words font-sans text-xl font-medium line-clamp-1">变量提升、v8解析和执行</h2>
            <p className="text-gray-500 mt-4 line-clamp-2">在解析时，变量提升到AST的作用域顶部，v8解析、编译、优化、执行</p>
            <button className="rounded-3xl w-2/3 h-[50px] bg-red-600 text-white mt-[30px]">深度剖析</button>
          </div>
          <div className="item flex-1">
            <h2 className="break-words font-sans text-xl font-medium">WeakMap的应用场景</h2>
            <p className="text-gray-500 mt-4 line-clamp-2">1.为对象存储额外的、私有数据 2.创建“记忆”对象 3.存储非公开的、仅用于某个函数或组件内部的数据</p>
            <button className="rounded-3xl w-2/3 h-[50px] bg-red-600 text-white mt-[30px]">具体场景</button>
          </div>
          <div className="item flex-1">
            <h2 className="break-words font-sans text-xl font-medium">登录的技术实现方案</h2>
            <p className="text-gray-500 mt-4 line-clamp-2">1. cookie不安全 2.OAuth 3.token需要了解access_token和refresh_token的概念
              4.session存储空间太大</p>
            <button className="rounded-3xl w-2/3 h-[50px] bg-red-600 text-white mt-[30px]">技术方案</button>
          </div>
        </div>
        <div className="mt-[100px] w-4/5 mx-auto">
          <div className="text-7xl font-semibold w-[500px] h-[300px] rounded-lg transform origin-x-center origin-y-center -rotate-3"
            style={{ background: "linear-gradient(113.09deg, #C699FF 4.87%, #7045CA 100%)" }}></div>

          <Link to="/posts/yida">
            <div className="p-5 text-white relative right-[30px] bottom-[280px] w-[500px] h-[320px] rounded-lg transform origin-x-center origin-y-center -rotate-3"
              style={{ background: "linear-gradient(148deg, #0acffeff, #495affff)" }}>
              <div
                className="text-white text-2xl font-semibold tracking-wide leading-7 transform origin-x-center origin-y-center -rotate-1">
                阿里宜搭一面</div>
              <div
                className="hook mt-3 w-1/2 bg-white text-sm rounded-lg leading-6 font-medium text-black p-2 transform origin-x-center origin-y-center -rotate-1">
                <div className="w-full">
                  <div>hooks和className component区别</div>
                  <div>有没有写过自定义hooks</div>
                  <div>useMemo和useCallback区别</div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div
                  className="w-2/3 p-2 mt-1 bg-white rounded-lg leading-6 tracking-wide font-medium text-black transform origin-x-center origin-y-center -rotate-1">
                  面试官想了解你是否熟悉最新的 React 开发技巧和最佳实践。他想问的重点是你对 Hooks API 和 className component 两种组件写法的区别和适用场景的理解
                </div>
              </div>
              <div className="mt-7 ml-[160px]">
                <svg width="540" height="280" viewBox="0 0 690 408" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,0 Q50,200 345,204 T690,408" stroke="white" strokeWidth="5"
                    strokeLinejoin="round"></path>
                  <path d="M0,0 Q50,200 345,204 T690,408" stroke="#C0D1EB" strokeWidth="5"
                    strokeLinejoin="round" strokeDasharray="20 20"></path>
                  <path d="M690,408Q640,208 345,204Q50,200 0,0" stroke="white" strokeWidth="5"
                    strokeLinejoin="round" pathLength="1" strokeDashoffset="0px"
                    strokeDasharray="0px 1px"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>









      {/* <div className="w-4/5 mx-auto">
        <div className="rounded-2xl p-4 break-words">
          <div className='text-4xl font-black text-red-300'>title</div>
          <div className='text-lg font-medium mt-4'>className components are the traditional way of writing React components, using ES6 classNamees. They were the only way to write components prior to the introduction of hooks in React 16.8.</div>
        </div>
        <div className="relative mt-8">
          <div className='absolute w-[200px] h-8 bg-gray-300 -top-8 rounded-t-3xl justify-center flex items-center'>wrapcomponent</div>
          <div className='absolute w-[200px] h-8 bg-gray-300 -top-8 left-[200px] rounded-t-3xl text-center'>hoc</div>
          <Highlight code={code} language={"javascript"} />
        </div>
      </div> */}
    </div>
  );
}

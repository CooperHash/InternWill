export const yidadata = {
  "1": {
    id: 1,
    wrap: `import React, { useState, useEffect } from 'react'

    interface Position {
      x: number,
      y: number
    }
    
    const usePosition = () => {
      const [position, setPosition] = useState({ x: 0, y: 0 } as Position)
    
      useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setPosition({
            x: event.clientX,
            y: event.clientY
          })
        }
    
        window.addEventListener('mousemove', handleMouseMove)
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove)
        }
      }, [])
    
      return position
    }
    
    interface Props {
      children: (position: Position) => React.ReactNode
    }`,

  hoc: `const withUsePosition = (Component: React.ComponentType<Props>) => {
        return (props: Props) => {
          const position = usePosition()
      
          return <Component {...props} position={position} />
        }
      }
      
      class UsePosition extends React.Component<Props & { position: Position }> {
        render() {
          return this.props.children(this.props.position)
        }
      }
      
      export default withUsePosition(UsePosition)`,

  rule: `从计算机范式的角度来看，class component 属于基于面向对象编程范式的组件实现方式，使用 ES6 的 class 关键字创建组件类，组件的状态通过 this.state 属性进行管理。在 class component 中，React 组件类本身是一个状态机，因此在状态变化时，需要使用 React 生命周期方法来重新渲染组件。

      Functional component with hooks 则属于基于函数式编程范式的组件实现方式。它是用函数创建 React 组件的一种新方法，函数内部使用 useState、useEffect 等 Hook 来实现状态的管理和副作用的处理。在 functional component 中，组件的状态被视为纯函数输入，状态的变化可以直接影响组件的输出，从而简化了组件的实现过程。
      
      从编程思想的角度来看，class component 更偏向于命令式编程，开发者需要明确地操作组件的状态和生命周期，以实现组件的行为。而 functional component with hooks 则更偏向于声明式编程，开发者更关注组件的输入和输出，使用 Hook 来自动处理状态变化和副作用，从而降低了组件的复杂度和开发难度。\n
      
      从状态机原理的角度来看，class component 可以被视为一个有限状态机，组件的状态会随着时间的推移发生变化。React 生命周期方法则提供了一个统一的接口，帮助组件根据不同的状态来更新组件的内容。而 functional component with hooks 可以被视为一个无限状态机，使用 Hook 来实现状态的管理和变化，同时使用函数式编程的方式来对状态进行操作和更新。`
  },


  "2": {
    rule: `useRequest是一个基于axios的React数据请求Hooks，它封装了请求状态管理、缓存、轮询等功能。使用useRequest可以简化数据请求过程，避免重复代码的编写。当发起请求时，useRequest会自动管理请求状态，包括请求中、请求成功、请求失败等，同时也支持配置缓存以及定时轮询等功能，提高了数据请求的效率。`,
    code: `import { useState, useEffect } from 'react';

    type RequestStatus = 'idle' | 'loading' | 'success' | 'error';
    
    interface RequestState<T> {
      status: RequestStatus;
      data: T | null;
      error: Error | null;
    }
    
    type RequestFunction<T> = () => Promise<T>;
    
    function useRequest<T>(requestFn: RequestFunction<T>): RequestState<T> {
      const [status, setStatus] = useState<RequestStatus>('idle');
      const [data, setData] = useState<T | null>(null);
      const [error, setError] = useState<Error | null>(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            setStatus('loading');
            const response = await requestFn();
            setData(response);
            setStatus('success');
          } catch (err) {
            setError(err);
            setStatus('error');
          }
        };
        fetchData();
      }, [requestFn]);
    
      return { status, data, error };
    }
    
    export default useRequest;
    `
  },


  "3": {
    rule: `useCallback 主要用于缓存函数，可以避免函数在每次重新渲染时被创建。useCallback 接受两个参数：回调函数和一个依赖数组。只有依赖数组中的值发生变化时，才会重新创建回调函数，否则会直接返回缓存的函数。

    useMemo 主要用于缓存计算结果，可以避免重复计算。useMemo 接受两个参数：一个回调函数和一个依赖数组。只有依赖数组中的值发生变化时，才会重新计算回调函数的返回值，否则会直接返回缓存的值。
    
    因此，如果需要缓存一个函数，可以使用 useCallback；如果需要缓存计算结果，可以使用 useMemo。`,
    useCallBack: `import React, { useState, useCallback } from "react";

    const Counter = () => {
      const [count, setCount] = useState(0);
      const handleIncrement = useCallback(() => {
        setCount(count + 1);
      }, [count]);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      );
    };
    `,
    useMemo: `import React, { useMemo } from 'react';

    function SortableList({ items }) {
      const sortedItems = useMemo(() => {
        return [...items].sort();
      }, [items]);
    
      return (
        <ul>
          {sortedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
    `
  },

  "4": {
    rule: `SSR（服务端渲染）与 SSG（静态网站生成）是解决页面渲染问题的两种方式。SSR 的渲染时机是在用户访问时，这时服务端会根据请求参数和数据动态生成 HTML，因此可以实现 SEO 优化。而 SSG 的渲染时机是在构建时，将生成好的 HTML 保存下来，但每当数据改变时，需要重新部署，因此不适用于动态数据的网站。SSR 要求服务端需要一个能让 Node.js 服务器运行的环境，并且在渲染过程中需要运行 JS 计算，占用 CPU 资源。在 SSR 的实现过程中，需要注意通用代码不能访问浏览器特有的全局变量，因为在 Node.js 运行时会报错。一个典型的 SSR 文件结构包括主入口文件 main.js，客户端入口文件 entry-client.js 和服务端入口文件 entry-server.js。使用 SSR 的原因在于，它可以让网站在网站一开始就能有相应的骨架生成，解决了 CSR（客户端渲染）中爬虫无法执行 JS 而无法获取内容的问题。SPA 只需要加载一次页面，无需重复加载静态资源`
  },

  "5": {
    rule: `cookie存储在客户端中，4kb太小易被篡改，可用于追踪用户行为在跨域名站点进行身份验证\n session存储在服务端中，一般用redis进行存储，需要注意redis容灾扩容等问题，客户端存储session id，拿着这个id取对应的session;\n web storage可以实现离线存储，可以存储的大小5M,localStorage一直存在页面需要手动清除，sessionStorage页面关闭就消失`,
    cookie: `// 登录页面
    function login() {
      // 保存用户信息到 Cookie 中
      document.cookie = username={username}; expires={time}; path=/;
    }
    
    // 主页
    function init() {
      // 从 Cookie 中获取用户信息
      const username = getCookie('username');
      if (username) {
        // 自动登录
        showDashboard(username);
      } else {
        // 显示登录页面
        showLogin();
      }
    }
    
    // 从 Cookie 中获取指定名称的值
    function getCookie(name) {
      const cookie = document.cookie.split('; ');
      for (let i = 0; i < cookie.length; i++) {
        const [key, value] = cookie[i].split('=');
        if (key === name) {
          return decodeURIComponent(value);
        }
      }
      return null;
    }
    `,
    session: `const express = require('express');
    const session = require('express-session');
    const app = express();
    
    // 使用 Session 中间件
    app.use(session({
      secret: 'mySecret',
      resave: false,
      saveUninitialized: true
    }));
    
    // 处理添加购物车请求
    app.post('/cart', (req, res) => {
      const { item } = req.body;
      const { cart } = req.session;
      if (cart) {
        // 如果购物车已经存在，则添加商品
        cart.push(item);
      } else {
        // 如果购物车不存在，则创建购物车
        req.session.cart = [item];
      }
      res.send('添加购物车成功');
    });
    
    // 处理查看购物车请求
    app.get('/cart', (req, res) => {
      const { cart } = req.session;
      if (cart) {
        res.send(cart);
      } else {
        res.send('购物车为空');
      }
    });
    
    app.listen(3000, () => console.log('Server started'));
    `,
  }
}
import CodeBlock from "@/components/Code"
import useSwitch from "@/lib/useSwitch";
import Highlight from "@/components/Highlight";
import { yidadata } from '@/lib/data'
export default function yida() {
  const [currentName, setCurrentName] = useSwitch("name2");
  const [currentName1, setCurrentName1] = useSwitch("useCallBack");
  const [currentName2, setCurrentName2] = useSwitch("cookie");
  
  const handleNameClick = (name: string) => {
    if (name != currentName) {
      (setCurrentName as (name: string) => void)(name);
    }
  };

  const handleNameClick1 = (name: string) => {
    if (name != currentName1) {
      (setCurrentName1 as (name: string) => void)(name);
    }
  };

  const handleNameClick2 = (name: string) => {
    if (name != currentName2) {
      (setCurrentName2 as (name: string) => void)(name);
    }
  };


  return (
    <div>
      <div className="relative mt-8 w-4/5 mx-auto mt-[100px]">
        <div className="">
          <div className="text-4xl leading-8 font-bold">class component和hooks</div>
          <div className="w-full mt-[60px] flex flex-col">
            <div className="w-full bg-white box-border p-8 overflow-auto leading-7 break-words whitespace-pre-wrap">{yidadata[1].rule}</div>
            <div className="w-full overflow-y-auto mt-5">
              <div className="flex flex-row bg-black w-full  text-indigo-300 p-2 space-x-4 overflow-hidden">
                <button className="focus:text-white" onClick={() => handleNameClick('name1')}>wrapcomponent.js</button>
                <button className="focus:text-white" onClick={() => handleNameClick('name2')}>hoc.js</button>
              </div>
              {currentName == 'name1' ? <div className="w-full"><Highlight language="javascript" code={yidadata[1].wrap} /></div> : <div className="w-full"><Highlight language="javascript" code={yidadata[1].hoc} /></div>}
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <div className="text-4xl leading-8 font-bold">写过自定义hooks吗</div>
          <div className="w-full mt-[60px] flex flex-col">
            <div className="w-full bg-white box-border p-8 overflow-auto leading-7 break-words whitespace-pre-wrap">{yidadata[2].rule}</div>
            <div className="w-full overflow-y-auto">
              <div className="flex flex-row bg-black w-full  text-indigo-300 p-2 space-x-4 overflow-hidden">
                <button className="focus:text-white" onClick={() => handleNameClick('name1')}>useRequest.tsx</button>
              </div>
              {<Highlight language="javascript" code={yidadata[2].code}/>}
            </div>
          </div>
        </div>


        <div className="mt-[120px]">
          <div className="text-4xl leading-8 font-bold">useMemo和useCallback区别</div>
          <div className="w-full mt-[60px] flex flex-col">
            <div className="w-full bg-white box-border p-8 overflow-auto leading-7 break-words whitespace-pre-wrap">{yidadata[2].rule}</div>
            <div className="w-full overflow-y-auto">
              <div className="flex flex-row bg-black w-full  text-indigo-300 p-2 space-x-4 overflow-hidden">
                <button className="focus:text-white" onClick={() => handleNameClick1('useCallBack')}>useCallBack</button>
                <button className="focus:text-white" onClick={() => handleNameClick1('useMemo')}>useMemo</button>
              </div>
              {currentName1 === 'useCallBack' && <div className="w-full"><Highlight language="javascript" code={yidadata[3].useCallBack} /></div>}
              {currentName1 === 'useMemo' && <div className="w-full"><Highlight language="javascript" code={yidadata[3].useMemo} /></div>}
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <div className="text-4xl leading-8 font-bold">SSR SPA SSG</div>
          <div className="w-full mt-[60px] flex flex-col">
            <div className="w-full bg-white box-border p-8 overflow-auto leading-7 break-words whitespace-pre-wrap">{yidadata[4].rule}</div>
          </div>
        </div>


        <div className="mt-[120px]">
          <div className="text-4xl leading-8 font-bold">Cookie Session WebStorage</div>
          <div className="w-full mt-[60px] flex flex-col">
            <div className="w-full bg-white box-border p-8 overflow-auto leading-7 break-words whitespace-pre-wrap">{yidadata[5].rule}</div>
            <div className="w-full overflow-y-auto">
              <div className="flex flex-row bg-black w-full  text-indigo-300 p-2 space-x-4 overflow-hidden">
                <button className="focus:text-white" onClick={() => handleNameClick2('cookie')}>cookie</button>
                <button className="focus:text-white" onClick={() => handleNameClick2('session')}>session</button>
              </div>
              {currentName2 === 'cookie' && <div className="w-full"><Highlight language="javascript" code={yidadata[5].cookie} /></div>}
              {currentName2 === 'session' && <div className="w-full"><Highlight language="javascript" code={yidadata[5].session} /></div>}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
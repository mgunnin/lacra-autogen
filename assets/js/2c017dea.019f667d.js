"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9268],{3192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(5893),i=t(1151);const a={title:"AutoGen Meets GPTs",authors:"gagb",tags:["openai-assistant"]},o=void 0,r={permalink:"/autogen/blog/2023/11/13/OAI-assistants",source:"@site/blog/2023-11-13-OAI-assistants/index.mdx",title:"AutoGen Meets GPTs",description:"OpenAI Assistant",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"openai-assistant",permalink:"/autogen/blog/tags/openai-assistant"}],readingTime:2.03,hasTruncateMarker:!1,authors:[{name:"Gagan Bansal",title:"Senior Researcher at Microsoft Research",url:"https://www.linkedin.com/in/gagan-bansal/",imageURL:"https://github.com/gagb.png",key:"gagb"}],frontMatter:{title:"AutoGen Meets GPTs",authors:"gagb",tags:["openai-assistant"]},unlisted:!1,prevItem:{title:"How to Assess Utility of LLM-powered Applications?",permalink:"/autogen/blog/2023/11/20/AgentEval"},nextItem:{title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",permalink:"/autogen/blog/2023/11/09/EcoAssistant"}},l={authorsImageUrls:[void 0]},c=[{value:"TLDR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Example",id:"basic-example",level:2},{value:"Code Interpreter Example",id:"code-interpreter-example",level:2},{value:"Limitations and Future Work",id:"limitations-and-future-work",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"OpenAI Assistant",src:t(6661).Z+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("em",{children:"AutoGen enables collaboration among multiple ChatGPTs for complex tasks."})})]}),"\n",(0,s.jsx)(n.h2,{id:"tldr",children:"TLDR"}),"\n",(0,s.jsxs)(n.p,{children:["OpenAI assistants are now integrated into AutoGen via ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/autogen/agentchat/contrib/gpt_assistant_agent.py",children:(0,s.jsx)(n.code,{children:"GPTAssistantAgent"})}),".\nThis enables multiple OpenAI assistants, which form the backend of the now popular GPTs, to collaborate and tackle complex tasks.\nCheckout example notebooks for reference:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_assistant_twoagents_basic.ipynb",children:"Basic example"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_code_interpreter.ipynb",children:"Code interpreter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_assistant_function_call.ipynb",children:"Function calls"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Earlier last week, OpenAI introduced ",(0,s.jsx)(n.a,{href:"https://openai.com/blog/introducing-gpts",children:"GPTs"}),", giving users ability to create custom ChatGPTs tailored for them.\n",(0,s.jsx)(n.em,{children:"But what if these individual GPTs could collaborate to do even more?"}),"\nFortunately, because of AutoGen, this is now a reality!\nAutoGen has been pioneering agents and supporting ",(0,s.jsx)(n.a,{href:"https://aka.ms/autogen-pdf",children:"multi-agent workflows"})," since earlier this year, and now (starting with version 0.2.0b5) we are introducing compatibility with the ",(0,s.jsx)(n.a,{href:"https://openai.com/blog/introducing-gpts",children:"Assistant API"}),", which is currently in beta preview."]}),"\n",(0,s.jsxs)(n.p,{children:["To accomplish this, we've added a new (experimental) agent called the ",(0,s.jsx)(n.code,{children:"GPTAssistantAgent"})," that\nlets you seamlessly add these new OpenAI assistants into AutoGen-based multi-agent workflows.\nThis integration shows great potential and synergy, and we plan to continue enhancing it."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen==0.2.0b5\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a basic example that uses a ",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," to allow an interface\nwith the ",(0,s.jsx)(n.code,{children:"GPTAssistantAgent"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["First, import the new agent and setup ",(0,s.jsx)(n.code,{children:"config_list"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import config_list_from_json\nfrom autogen.agentchat.contrib.gpt_assistant_agent import GPTAssistantAgent\nfrom autogen import UserProxyAgent\n\nconfig_list = config_list_from_json("OAI_CONFIG_LIST")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then simply define the OpenAI assistant agent and give it the task!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# creates new assistant using Assistant API\ngpt_assistant = GPTAssistantAgent(\n    name="assistant",\n    llm_config={\n        "config_list": config_list,\n        "assistant_id": None\n    })\n\nuser_proxy = UserProxyAgent(name="user_proxy",\n    code_execution_config={\n        "work_dir": "coding"\n    },\n    human_input_mode="NEVER")\n\nuser_proxy.initiate_chat(gpt_assistant, message="Print hello world")\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GPTAssistantAgent"})," supports both creating new OpenAI assistants or reusing existing assistants\n(e.g, by providing an ",(0,s.jsx)(n.code,{children:"assistant_id"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"code-interpreter-example",children:"Code Interpreter Example"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GPTAssistantAgent"})," allows you to specify an OpenAI tools\n(e.g., function calls, code interpreter, etc). The example below enables an assistant\nthat can use OpenAI code interpreter to solve tasks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# creates new assistant using Assistant API\ngpt_assistant = GPTAssistantAgent(\n    name="assistant",\n    llm_config={\n        "config_list": config_list,\n        "assistant_id": None,\n        "tools": [\n            {\n                "type": "code_interpreter"\n            }\n        ],\n    })\n\nuser_proxy = UserProxyAgent(name="user_proxy",\n    code_execution_config={\n        "work_dir": "coding"\n    },\n    human_input_mode="NEVER")\n\nuser_proxy.initiate_chat(gpt_assistant, message="Print hello world")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Checkout more examples ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/notebook",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"limitations-and-future-work",children:"Limitations and Future Work"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Group chat managers using GPT assistant are pending."}),"\n",(0,s.jsx)(n.li,{children:"GPT assistants with multimodal capabilities haven't been released yet but we are committed to support them."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GPTAssistantAgent"})," was made possible through collaboration with\n",(0,s.jsx)(n.a,{href:"https://github.com/IANTHEREAL",children:"@IANTHEREAL"}),",\n",(0,s.jsx)(n.a,{href:"https://leoljl.github.io",children:"Jiale Liu"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/kevin666aa",children:"Yiran Wu"}),",\n",(0,s.jsx)(n.a,{href:"https://qingyun-wu.github.io/",children:"Qingyun Wu"}),",\n",(0,s.jsx)(n.a,{href:"https://www.microsoft.com/en-us/research/people/chiw/",children:"Chi Wang"}),", and many other AutoGen maintainers."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6661:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/teaser-0b85f5efe5965c70b376b39a4ac34b4e.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(7294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
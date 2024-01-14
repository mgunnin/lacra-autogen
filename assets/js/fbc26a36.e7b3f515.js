"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2195],{5513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),a=t(1151);const o={title:"Multimodal with GPT-4V and LLaVA",authors:"beibinli",tags:["LMM","multimodal"]},s=void 0,r={permalink:"/autogen/blog/2023/11/06/LMM-Agent",source:"@site/blog/2023-11-06-LMM-Agent/index.mdx",title:"Multimodal with GPT-4V and LLaVA",description:"LMM Teaser",date:"2023-11-06T00:00:00.000Z",formattedDate:"November 6, 2023",tags:[{label:"LMM",permalink:"/autogen/blog/tags/lmm"},{label:"multimodal",permalink:"/autogen/blog/tags/multimodal"}],readingTime:2.03,hasTruncateMarker:!1,authors:[{name:"Beibin Li",title:"Senior Research Engineer at Microsoft",url:"https://github.com/beibinli",imageURL:"https://github.com/beibinli.png",key:"beibinli"}],frontMatter:{title:"Multimodal with GPT-4V and LLaVA",authors:"beibinli",tags:["LMM","multimodal"]},unlisted:!1,prevItem:{title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",permalink:"/autogen/blog/2023/11/09/EcoAssistant"},nextItem:{title:"AutoGen's Teachable Agents",permalink:"/autogen/blog/2023/10/26/TeachableAgent"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Reference",id:"reference",level:2},{value:"Future Enhancements",id:"future-enhancements",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"LMM Teaser",src:t(7500).Z+"",width:"1792",height:"1024"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In Brief:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Introducing the ",(0,i.jsx)(n.strong,{children:"Multimodal Conversable Agent"})," and the ",(0,i.jsx)(n.strong,{children:"LLaVA Agent"})," to enhance LMM functionalities."]}),"\n",(0,i.jsxs)(n.li,{children:["Users can input text and images simultaneously using the ",(0,i.jsx)(n.code,{children:"<img img_path>"})," tag to specify image loading."]}),"\n",(0,i.jsxs)(n.li,{children:["Demonstrated through the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_gpt-4v.ipynb",children:"GPT-4V notebook"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Demonstrated through the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb",children:"LLaVA notebook"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Large multimodal models (LMMs) augment large language models (LLMs) with the ability to process multi-sensory data."}),"\n",(0,i.jsxs)(n.p,{children:["This blog post and the latest AutoGen update concentrate on visual comprehension. Users can input images, pose questions about them, and receive text-based responses from these LMMs.\nWe support the ",(0,i.jsx)(n.code,{children:"gpt-4-vision-preview"})," model from OpenAI and ",(0,i.jsx)(n.code,{children:"LLaVA"})," model from Microsoft now."]}),"\n",(0,i.jsxs)(n.p,{children:["Here, we emphasize the ",(0,i.jsx)(n.strong,{children:"Multimodal Conversable Agent"})," and the ",(0,i.jsx)(n.strong,{children:"LLaVA Agent"})," due to their growing popularity.\nGPT-4V represents the forefront in image comprehension, while LLaVA is an efficient model, fine-tuned from LLama-2."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Incorporate the ",(0,i.jsx)(n.code,{children:"lmm"})," feature during AutoGen installation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[lmm]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Subsequently, import the ",(0,i.jsx)(n.strong,{children:"Multimodal Conversable Agent"})," or ",(0,i.jsx)(n.strong,{children:"LLaVA Agent"})," from AutoGen:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from autogen.agentchat.contrib.multimodal_conversable_agent import MultimodalConversableAgent  # for GPT-4V\nfrom autogen.agentchat.contrib.llava_agent import LLaVAAgent  # for LLaVA\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"A simple syntax has been defined to incorporate both messages and images within a single string."}),"\n",(0,i.jsx)(n.p,{children:"Example of an in-context learning prompt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'prompt = """You are now an image classifier for facial expressions. Here are\nsome examples.\n\n<img happy.jpg> depicts a happy expression.\n<img http://some_location.com/sad.jpg> represents a sad expression.\n<img obama.jpg> portrays a neutral expression.\n\nNow, identify the facial expression of this individual: <img unknown.png>\n"""\n\nagent = MultimodalConversableAgent()\nuser = UserProxyAgent()\nuser.initiate_chat(agent, message=prompt)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MultimodalConversableAgent"})," interprets the input prompt, extracting images from local or internet sources."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsx)(n.p,{children:"Similar to other AutoGen agents, multimodal agents support multi-round dialogues with other agents, code generation, factual queries, and management via a GroupChat interface."}),"\n",(0,i.jsxs)(n.p,{children:["For example, the ",(0,i.jsx)(n.code,{children:"FigureCreator"})," in our ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_gpt-4v.ipynb",children:"GPT-4V notebook"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb",children:"LLaVA notebook"})," integrates two agents: a coder (an AssistantAgent) and critics (a multimodal agent).\nThe coder drafts Python code for visualizations, while the critics provide insights for enhancement. Collaboratively, these agents aim to refine visual outputs.\nWith ",(0,i.jsx)(n.code,{children:"human_input_mode=ALWAYS"}),", you can also contribute suggestions for better visualizations."]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openai.com/research/gpt-4v-system-card",children:"GPT-4V System Card"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/haotian-liu/LLaVA",children:"LLaVA GitHub"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"future-enhancements",children:"Future Enhancements"}),"\n",(0,i.jsxs)(n.p,{children:["For further inquiries or suggestions, please open an issue in the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/",children:"AutoGen repository"})," or contact me directly at ",(0,i.jsx)(n.a,{href:"mailto:beibin.li@microsoft.com",children:"beibin.li@microsoft.com"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"AutoGen will continue to evolve, incorporating more multimodal functionalities such as DALLE model integration, audio interaction, and video comprehension. Stay tuned for these exciting developments."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7500:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/teaser-380bdaa90a1c02ad009520bf289776c9.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
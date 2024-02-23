"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6709],{4779:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(5893),l=i(1151);const t={sidebar_label:"agent_builder",title:"agentchat.contrib.agent_builder"},a=void 0,r={id:"reference/agentchat/contrib/agent_builder",title:"agentchat.contrib.agent_builder",description:"AgentBuilder",source:"@site/docs/reference/agentchat/contrib/agent_builder.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/agent_builder",permalink:"/autogen/docs/reference/agentchat/contrib/agent_builder",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/agent_builder.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent_builder",title:"agentchat.contrib.agent_builder"},sidebar:"referenceSideBar",previous:{title:"teachability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/teachability"},next:{title:"compressible_agent",permalink:"/autogen/docs/reference/agentchat/contrib/compressible_agent"}},c={},d=[{value:"AgentBuilder",id:"agentbuilder",level:2},{value:"__init__",id:"__init__",level:3},{value:"clear_agent",id:"clear_agent",level:3},{value:"clear_all_agents",id:"clear_all_agents",level:3},{value:"build",id:"build",level:3},{value:"build_from_library",id:"build_from_library",level:3},{value:"save",id:"save",level:3},{value:"load",id:"load",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"agentbuilder",children:"AgentBuilder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class AgentBuilder()\n"})}),"\n",(0,s.jsx)(n.p,{children:"AgentBuilder can help user build an automatic task solving process powered by multi-agent system.\nSpecifically, our building pipeline includes initialize and build.\nIn build(), we prompt a LLM to create multiple participant agents, and specify whether this task need programming to solve.\nUser can save the built agents' config by calling save(), and load the saved configs by load(), which can skip the\nbuilding process."}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def __init__(config_file_or_env: Optional[str] = "OAI_CONFIG_LIST",\n             config_file_location: Optional[str] = "",\n             builder_model: Optional[str] = "gpt-4",\n             agent_model: Optional[str] = "gpt-4",\n             host: Optional[str] = "localhost",\n             endpoint_building_timeout: Optional[int] = 600,\n             max_tokens: Optional[int] = 945,\n             max_agents: Optional[int] = 5)\n'})}),"\n",(0,s.jsx)(n.p,{children:"(These APIs are experimental and may change in the future.)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_file_or_env"})," - path or environment of the OpenAI api configs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"builder_model"})," - specify a model as the backbone of build manager."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_model"})," - specify a model as the backbone of participant agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"host"})," - endpoint host."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint_building_timeout"})," - timeout for building up an endpoint server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_tokens"})," - max tokens for each agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_agents"})," - max agents for each task."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clear_agent",children:"clear_agent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def clear_agent(agent_name: str, recycle_endpoint: Optional[bool] = True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clear a specific agent by name."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_name"})," - the name of agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"recycle_endpoint"})," - trigger for recycle the endpoint server. If true, the endpoint will be recycled\nwhen there is no agent depending on."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clear_all_agents",children:"clear_all_agents"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def clear_all_agents(recycle_endpoint: Optional[bool] = True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clear all cached agents."}),"\n",(0,s.jsx)(n.h3,{id:"build",children:"build"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def build(building_task: str,\n          default_llm_config: Dict,\n          coding: Optional[bool] = None,\n          code_execution_config: Optional[Dict] = None,\n          use_oai_assistant: Optional[bool] = False,\n          **kwargs) -> Tuple[List[autogen.ConversableAgent], Dict]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Auto build agents based on the building task."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"building_task"})," - instruction that helps build manager (gpt-4) to decide what agent should be built."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"coding"})," - use to identify if the user proxy (a code interpreter) should be added."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"code_execution_config"})," - specific configs for user proxy (e.g., last_n_messages, work_dir, ...)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default_llm_config"})," - specific configs for LLM (e.g., config_list, seed, temperature, ...)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"use_oai_assistant"})," - use OpenAI assistant api instead of self-constructed agent."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_list"})," - a list of agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cached_configs"})," - cached configs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"build_from_library",children:"build_from_library"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def build_from_library(\n        building_task: str,\n        library_path_or_json: str,\n        default_llm_config: Dict,\n        coding: Optional[bool] = True,\n        code_execution_config: Optional[Dict] = None,\n        use_oai_assistant: Optional[bool] = False,\n        embedding_model: Optional[str] = None,\n        **kwargs) -> Tuple[List[autogen.ConversableAgent], Dict]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Build agents from a library.\nThe library is a list of agent configs, which contains the name and system_message for each agent.\nWe use a build manager to decide what agent in that library should be involved to the task."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"building_task"})," - instruction that helps build manager (gpt-4) to decide what agent should be built."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"library_path_or_json"})," - path or JSON string config of agent library."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default_llm_config"})," - specific configs for LLM (e.g., config_list, seed, temperature, ...)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"coding"})," - use to identify if the user proxy (a code interpreter) should be added."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"code_execution_config"})," - specific configs for user proxy (e.g., last_n_messages, work_dir, ...)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"use_oai_assistant"})," - use OpenAI assistant api instead of self-constructed agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"embedding_model"}),' - a Sentence-Transformers model use for embedding similarity to select agents from library.\nif None, an openai model will be prompted to select agents. As reference, chromadb use "all-mpnet-base-\nv2" as default.']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_list"})," - a list of agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cached_configs"})," - cached configs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"save",children:"save"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def save(filepath: Optional[str] = None) -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:'Save building configs. If the filepath is not specific, this function will create a filename by encrypt the\nbuilding_task string by md5 with "save_config_" prefix, and save config to the local path.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filepath"})," - save path."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filepath"})," - path save."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"load",children:"load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def load(filepath: Optional[str] = None,\n         config_json: Optional[str] = None,\n         use_oai_assistant: Optional[bool] = False,\n         **kwargs) -> Tuple[List[autogen.ConversableAgent], Dict]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Load building configs and call the build function to complete building without calling online LLMs' api."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filepath"})," - filepath or JSON string for the save config."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config_json"})," - JSON string for the save config."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"use_oai_assistant"})," - use OpenAI assistant api instead of self-constructed agent."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent_list"})," - a list of agents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cached_configs"})," - cached configs."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(7294);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
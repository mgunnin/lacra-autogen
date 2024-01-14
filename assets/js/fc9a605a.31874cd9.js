"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8795],{565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(5893),s=t(1151);const o={},r="Multi-agent Conversation Framework",i={id:"Use-Cases/agent_chat",title:"Multi-agent Conversation Framework",description:"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLMs, tools, and humans via automated agent chat.",source:"@site/docs/Use-Cases/agent_chat.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/agent_chat",permalink:"/autogen/docs/Use-Cases/agent_chat",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/agent_chat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/autogen/docs/Installation"},next:{title:"Enhanced Inference",permalink:"/autogen/docs/Use-Cases/enhanced_inference"}},c={},l=[{value:"Agents",id:"agents",level:3},{value:"Tool calling",id:"tool-calling",level:4},{value:"Multi-agent Conversations",id:"multi-agent-conversations",level:2},{value:"A Basic Two-Agent Conversation Example",id:"a-basic-two-agent-conversation-example",level:3},{value:"Supporting Diverse Conversation Patterns",id:"supporting-diverse-conversation-patterns",level:3},{value:"Conversations with different levels of autonomy, and human-involvement patterns",id:"conversations-with-different-levels-of-autonomy-and-human-involvement-patterns",level:4},{value:"Static and dynamic conversations",id:"static-and-dynamic-conversations",level:4},{value:"Diverse Applications Implemented with AutoGen",id:"diverse-applications-implemented-with-autogen",level:3},{value:"For Further Reading",id:"for-further-reading",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"multi-agent-conversation-framework",children:"Multi-agent Conversation Framework"}),"\n",(0,a.jsx)(n.p,{children:"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLMs, tools, and humans via automated agent chat.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code."}),"\n",(0,a.jsx)(n.p,{children:"This framework simplifies the orchestration, automation and optimization of a complex LLM workflow. It maximizes the performance of LLM models and overcome their weaknesses. It enables building next-gen LLM applications based on multi-agent conversations with minimal effort."}),"\n",(0,a.jsx)(n.h3,{id:"agents",children:"Agents"}),"\n",(0,a.jsx)(n.p,{children:"AutoGen abstracts and implements conversable agents\ndesigned to solve tasks through inter-agent conversations. Specifically, the agents in AutoGen have the following notable features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Conversable: Agents in AutoGen are conversable, which means that any agent can send\nand receive messages from other agents to initiate or continue a conversation"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Customizable: Agents in AutoGen can be customized to integrate LLMs, humans, tools, or a combination of them."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The figure below shows the built-in agents in AutoGen.\n",(0,a.jsx)(n.img,{alt:"Agent Chat Example",src:t(6884).Z+"",width:"2916",height:"1556"})]}),"\n",(0,a.jsxs)(n.p,{children:["We have designed a generic ",(0,a.jsx)(n.a,{href:"../reference/agentchat/conversable_agent#conversableagent-objects",children:(0,a.jsx)(n.code,{children:"ConversableAgent"})}),"\nclass for Agents that are capable of conversing with each other through the exchange of messages to jointly finish a task. An agent can communicate with other agents and perform actions. Different agents can differ in what actions they perform after receiving messages. Two representative subclasses are ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})})," and ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})})," is designed to act as an AI assistant, using LLMs by default but not requiring human input or code execution. It could write Python code (in a Python coding block) for a user to execute when a message (typically a description of a task that needs to be solved) is received. Under the hood, the Python code is written by LLM (e.g., GPT-4). It can also receive the execution results and suggest corrections or bug fixes. Its behavior can be altered by passing a new system message. The LLM ",(0,a.jsx)(n.a,{href:"#enhanced-inference",children:"inference"})," configuration can be configured via [",(0,a.jsx)(n.code,{children:"llm_config"}),"]."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," is conceptually a proxy agent for humans, soliciting human input as the agent's reply at each interaction turn by default and also having the capability to execute code and call functions or tools. The ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," triggers code execution automatically when it detects an executable code block in the received message and no human user input is provided. Code execution can be disabled by setting the ",(0,a.jsx)(n.code,{children:"code_execution_config"})," parameter to False. LLM-based response is disabled by default. It can be enabled by setting ",(0,a.jsx)(n.code,{children:"llm_config"})," to a dict corresponding to the ",(0,a.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"inference"})," configuration. When ",(0,a.jsx)(n.code,{children:"llm_config"})," is set as a dictionary, ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})})," can generate replies using an LLM when code execution is not performed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The auto-reply capability of ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/conversable_agent#conversableagent-objects",children:(0,a.jsx)(n.code,{children:"ConversableAgent"})})," allows for more autonomous multi-agent communication while retaining the possibility of human intervention.\nOne can also easily extend it by registering reply functions with the ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/conversable_agent#register_reply",children:(0,a.jsx)(n.code,{children:"register_reply()"})})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following code, we create an ",(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects",children:(0,a.jsx)(n.code,{children:"AssistantAgent"})}),'  named "assistant" to serve as the assistant and a ',(0,a.jsx)(n.a,{href:"/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects",children:(0,a.jsx)(n.code,{children:"UserProxyAgent"})}),' named "user_proxy" to serve as a proxy for the human user. We will later employ these two agents to solve a task.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from autogen import AssistantAgent, UserProxyAgent\n\n# create an AssistantAgent instance named "assistant"\nassistant = AssistantAgent(name="assistant")\n\n# create a UserProxyAgent instance named "user_proxy"\nuser_proxy = UserProxyAgent(name="user_proxy")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"tool-calling",children:"Tool calling"}),"\n",(0,a.jsx)(n.p,{children:"Tool calling enables agents to interact with external tools and APIs more efficiently.\nThis feature allows the AI model to intelligently choose to output a JSON object containing\narguments to call specific tools based on the user's input. A tool to be called is\nspecified with a JSON schema describing its parameters and their types. Writing such JSON schema\nis complex and error-prone and that is why AutoGen framework provides two high level function decorators for automatically generating such schema using type hints on standard Python datatypes\nor Pydantic models:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../reference/agentchat/conversable_agent#register_for_llm",children:(0,a.jsx)(n.code,{children:"ConversableAgent.register_for_llm"})})," is used to register the function as a Tool in the ",(0,a.jsx)(n.code,{children:"llm_config"})," of a ConversableAgent. The ConversableAgent agent can propose execution of a registered Tool, but the actual execution will be performed by a UserProxy agent."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../reference/agentchat/conversable_agent#register_for_execution",children:(0,a.jsx)(n.code,{children:"ConversableAgent.register_for_execution"})})," is used to register the function in the ",(0,a.jsx)(n.code,{children:"function_map"})," of a UserProxy agent."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The following examples illustrates the process of registering a custom function for currency exchange calculation that uses type hints and standard Python datatypes:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["First, we import necessary libraries and configure models using ",(0,a.jsx)(n.a,{href:"../FAQ#set-your-api-endpoints",children:(0,a.jsx)(n.code,{children:"autogen.config_list_from_json"})})," function:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from typing import Literal\n\nfrom pydantic import BaseModel, Field\nfrom typing_extensions import Annotated\n\nimport autogen\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4", "gpt-3.5-turbo", "gpt-3.5-turbo-16k"],\n    },\n)\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"We create an assistant agent and user proxy. The assistant will be responsible for suggesting which functions to call and the user proxy for the actual execution of a proposed function:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'llm_config = {\n    "config_list": config_list,\n    "timeout": 120,\n}\n\nchatbot = autogen.AssistantAgent(\n    name="chatbot",\n    system_message="For currency exchange tasks, only use the functions you have been provided with. Reply TERMINATE when the task is done.",\n    llm_config=llm_config,\n)\n\n# create a UserProxyAgent instance named "user_proxy"\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda x: x.get("content", "") and x.get("content", "").rstrip().endswith("TERMINATE"),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=10,\n)\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["We define the function ",(0,a.jsx)(n.code,{children:"currency_calculator"})," below as follows and decorate it with two decorators:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../reference/agentchat/conversable_agent#register_for_execution",children:(0,a.jsx)(n.code,{children:"@user_proxy.register_for_execution()"})})," adding the function ",(0,a.jsx)(n.code,{children:"currency_calculator"})," to ",(0,a.jsx)(n.code,{children:"user_proxy.function_map"}),", and"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../reference/agentchat/conversable_agent#register_for_llm",children:(0,a.jsx)(n.code,{children:"@chatbot.register_for_llm"})})," adding a generated JSON schema of the function to ",(0,a.jsx)(n.code,{children:"llm_config"})," of ",(0,a.jsx)(n.code,{children:"chatbot"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'CurrencySymbol = Literal["USD", "EUR"]\n\n\ndef exchange_rate(base_currency: CurrencySymbol, quote_currency: CurrencySymbol) -> float:\n    if base_currency == quote_currency:\n        return 1.0\n    elif base_currency == "USD" and quote_currency == "EUR":\n        return 1 / 1.1\n    elif base_currency == "EUR" and quote_currency == "USD":\n        return 1.1\n    else:\n        raise ValueError(f"Unknown currencies {base_currency}, {quote_currency}")\n\n# NOTE: for Azure OpenAI, please use API version 2023-12-01-preview or later as\n# support for earlier versions will be deprecated.\n# For API versions 2023-10-01-preview or earlier you may\n# need to set `api_style="function"` in the decorator if the default value does not work:\n# `register_for_llm(description=..., api_style="function")`.\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n    base_amount: Annotated[float, "Amount of currency in base_currency"],\n    base_currency: Annotated[CurrencySymbol, "Base currency"] = "USD",\n    quote_currency: Annotated[CurrencySymbol, "Quote currency"] = "EUR",\n) -> str:\n    quote_amount = exchange_rate(base_currency, quote_currency) * base_amount\n    return f"{quote_amount} {quote_currency}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Notice the use of ",(0,a.jsx)(n.a,{href:"https://docs.python.org/3/library/typing.html?highlight=annotated#typing.Annotated",children:"Annotated"})," to specify the type and the description of each parameter. The return value of the function must be either string or serializable to string using the ",(0,a.jsx)(n.a,{href:"https://docs.python.org/3/library/json.html#json.dumps",children:(0,a.jsx)(n.code,{children:"json.dumps()"})})," or ",(0,a.jsxs)(n.a,{href:"https://docs.pydantic.dev/latest/concepts/serialization/#modelmodel_dump_json",children:[(0,a.jsx)(n.code,{children:"Pydantic"})," model dump to JSON"]})," (both version 1.x and 2.x are supported)."]}),"\n",(0,a.jsxs)(n.p,{children:["You can check the JSON schema generated by the decorator ",(0,a.jsx)(n.code,{children:'chatbot.llm_config["tools"]'}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"[{'type': 'function', 'function':\n {'description': 'Currency exchange calculator.',\n  'name': 'currency_calculator',\n  'parameters': {'type': 'object',\n   'properties': {'base_amount': {'type': 'number',\n     'description': 'Amount of currency in base_currency'},\n    'base_currency': {'enum': ['USD', 'EUR'],\n     'type': 'string',\n     'default': 'USD',\n     'description': 'Base currency'},\n    'quote_currency': {'enum': ['USD', 'EUR'],\n     'type': 'string',\n     'default': 'EUR',\n     'description': 'Quote currency'}},\n   'required': ['base_amount']}}}]\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Agents can now use the function as follows:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'user_proxy.initiate_chat(\n    chatbot,\n    message="How much is 123.45 USD in EUR?",\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'user_proxy (to chatbot):\n\nHow much is 123.45 USD in EUR?\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool Call: currency_calculator *****\nArguments:\n{"base_amount":123.45,"base_currency":"USD","quote_currency":"EUR"}\n********************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION currency_calculator...\nuser_proxy (to chatbot):\n\n***** Response from calling function "currency_calculator" *****\n112.22727272727272 EUR\n****************************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n123.45 USD is equivalent to approximately 112.23 EUR.\n...\n\nTERMINATE\n'})}),"\n",(0,a.jsx)(n.p,{children:"Use of Pydantic models further simplifies writing of such functions. Pydantic models can be used\nfor both the parameters of a function and for its return type. Parameters of such functions will\nbe constructed from JSON provided by an AI model, while the output will be serialized as JSON\nencoded string automatically."}),"\n",(0,a.jsx)(n.p,{children:"The following example shows how we could rewrite our currency exchange calculator example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# defines a Pydantic model\nclass Currency(BaseModel):\n  # parameter of type CurrencySymbol\n  currency: Annotated[CurrencySymbol, Field(..., description="Currency symbol")]\n  # parameter of type float, must be greater or equal to 0 with default value 0\n  amount: Annotated[float, Field(0, description="Amount of currency", ge=0)]\n\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n  base: Annotated[Currency, "Base currency: amount and currency symbol"],\n  quote_currency: Annotated[CurrencySymbol, "Quote currency symbol"] = "USD",\n) -> Currency:\n  quote_amount = exchange_rate(base.currency, quote_currency) * base.amount\n  return Currency(amount=quote_amount, currency=quote_currency)\n'})}),"\n",(0,a.jsx)(n.p,{children:"The generated JSON schema has additional properties such as minimum value encoded:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"[{'type': 'function', 'function':\n {'description': 'Currency exchange calculator.',\n  'name': 'currency_calculator',\n  'parameters': {'type': 'object',\n   'properties': {'base': {'properties': {'currency': {'description': 'Currency symbol',\n       'enum': ['USD', 'EUR'],\n       'title': 'Currency',\n       'type': 'string'},\n      'amount': {'default': 0,\n       'description': 'Amount of currency',\n       'minimum': 0.0,\n       'title': 'Amount',\n       'type': 'number'}},\n     'required': ['currency'],\n     'title': 'Currency',\n     'type': 'object',\n     'description': 'Base currency: amount and currency symbol'},\n    'quote_currency': {'enum': ['USD', 'EUR'],\n     'type': 'string',\n     'default': 'USD',\n     'description': 'Quote currency symbol'}},\n   'required': ['base']}}}]\n"})}),"\n",(0,a.jsx)(n.p,{children:"For more in-depth examples, please check the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Currency calculator examples - ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_function_call_currency_calculator.ipynb",children:"View Notebook"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use Provided Tools as Functions - ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_function_call.ipynb",children:"View Notebook"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use Tools via Sync and Async Function Calling - ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_function_call_async.ipynb",children:"View Notebook"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"multi-agent-conversations",children:"Multi-agent Conversations"}),"\n",(0,a.jsx)(n.h3,{id:"a-basic-two-agent-conversation-example",children:"A Basic Two-Agent Conversation Example"}),"\n",(0,a.jsx)(n.p,{children:"Once the participating agents are constructed properly, one can start a multi-agent conversation session by an initialization step as shown in the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# the assistant receives a message from the user, which contains the task description\nuser_proxy.initiate_chat(\n    assistant,\n    message="""What date is today? Which big tech stock has the largest year-to-date gain this year? How much is the gain?""",\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After the initialization step, the conversation could proceed automatically. Find a visual illustration of how the user_proxy and assistant collaboratively solve the above task autonomously below:\n",(0,a.jsx)(n.img,{alt:"Agent Chat Example",src:t(9149).Z+"",width:"3840",height:"1664"})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The assistant receives a message from the user_proxy, which contains the task description."}),"\n",(0,a.jsx)(n.li,{children:"The assistant then tries to write Python code to solve the task and sends the response to the user_proxy."}),"\n",(0,a.jsx)(n.li,{children:"Once the user_proxy receives a response from the assistant, it tries to reply by either soliciting human input or preparing an automatically generated reply. If no human input is provided, the user_proxy executes the code and uses the result as the auto-reply."}),"\n",(0,a.jsx)(n.li,{children:"The assistant then generates a further response for the user_proxy. The user_proxy can then decide whether to terminate the conversation. If not, steps 3 and 4 are repeated."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"supporting-diverse-conversation-patterns",children:"Supporting Diverse Conversation Patterns"}),"\n",(0,a.jsx)(n.h4,{id:"conversations-with-different-levels-of-autonomy-and-human-involvement-patterns",children:"Conversations with different levels of autonomy, and human-involvement patterns"}),"\n",(0,a.jsxs)(n.p,{children:["On the one hand, one can achieve fully autonomous conversations after an initialization step. On the other hand, AutoGen can be used to implement human-in-the-loop problem-solving by configuring human involvement levels and patterns (e.g., setting the ",(0,a.jsx)(n.code,{children:"human_input_mode"})," to ",(0,a.jsx)(n.code,{children:"ALWAYS"}),"), as human involvement is expected and/or desired in many applications."]}),"\n",(0,a.jsx)(n.h4,{id:"static-and-dynamic-conversations",children:"Static and dynamic conversations"}),"\n",(0,a.jsx)(n.p,{children:"By adopting the conversation-driven control with both programming language and natural language, AutoGen inherently allows dynamic conversation. Dynamic conversation allows the agent topology to change depending on the actual flow of conversation under different input problem instances, while the flow of a static conversation always follows a pre-defined topology. The dynamic conversation pattern is useful in complex applications where the patterns of interaction cannot be predetermined in advance. AutoGen provides two general approaches to achieving dynamic conversation:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Registered auto-reply. With the pluggable auto-reply function, one can choose to invoke conversations with other agents depending on the content of the current message and context. A working system demonstrating this type of dynamic conversation can be found in this code example, demonstrating a ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat.ipynb",children:"dynamic group chat"}),". In the system, we register an auto-reply function in the group chat manager, which lets LLM decide who the next speaker will be in a group chat setting."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["LLM-based function call. In this approach, LLM decides whether or not to call a particular function depending on the conversation status in each inference call.\nBy messaging additional agents in the called functions, the LLM can drive dynamic multi-agent conversation. A working system showcasing this type of dynamic conversation can be found in the ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_two_users.ipynb",children:"multi-user math problem solving scenario"}),", where a student assistant would automatically resort to an expert using function calls."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"diverse-applications-implemented-with-autogen",children:"Diverse Applications Implemented with AutoGen"}),"\n",(0,a.jsxs)(n.p,{children:["The figure below shows six examples of applications built using AutoGen.\n",(0,a.jsx)(n.img,{alt:"Applications",src:t(5531).Z+"",width:"5953",height:"2809"})]}),"\n",(0,a.jsxs)(n.p,{children:["Find a list of examples in this page: ",(0,a.jsx)(n.a,{href:"/autogen/docs/Examples#automated-multi-agent-chat",children:"Automated Agent Chat Examples"})]}),"\n",(0,a.jsx)(n.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Interested in the research that leads to this package? Please check the following papers."})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155",children:"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework"}),". Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang and Chi Wang. ArXiv 2023."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2306.01337",children:"An Empirical Study on Challenging Math Problem Solving with GPT-4"}),". Yiran Wu, Feiran Jia, Shaokun Zhang, Hangyu Li, Erkang Zhu, Yue Wang, Yin Tat Lee, Richard Peng, Qingyun Wu, Chi Wang. ArXiv preprint arXiv:2306.01337 (2023)."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9149:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/agent_example-a965f253ce7d8e1548ff819e19edc5e4.png"},5531:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/app-c414cd164ef912e5e8b40f61042143ad.png"},6884:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/autogen_agents-b80434bcb15d46da0c6cbeed28115f38.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
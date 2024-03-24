"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5474],{40810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(85893),s=t(11151);const a={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/code-executors.ipynb",source_notebook:"/website/docs/tutorial/code-executors.ipynb",title:"Code Executors"},i="Code Executors",r={id:"tutorial/code-executors",title:"Code Executors",description:"Open In Colab",source:"@site/docs/tutorial/code-executors.mdx",sourceDirName:"tutorial",slug:"/tutorial/code-executors",permalink:"/autogen/docs/tutorial/code-executors",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/code-executors.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/code-executors.ipynb",source_notebook:"/website/docs/tutorial/code-executors.ipynb",title:"Code Executors"},sidebar:"docsSidebar",previous:{title:"Allowing Human Feedback in Agents",permalink:"/autogen/docs/tutorial/human-in-the-loop"},next:{title:"Tool Use",permalink:"/autogen/docs/tutorial/tool-use"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Local Execution",id:"local-execution",level:2},{value:"Docker Execution",id:"docker-execution",level:2},{value:"Use Code Execution in Conversation",id:"use-code-execution-in-conversation",level:2},{value:"Command Line or Jupyter Code Executor?",id:"command-line-or-jupyter-code-executor",level:2},{value:"Note on User Proxy Agent and Assistant Agent",id:"note-on-user-proxy-agent-and-assistant-agent",level:2},{value:"User Proxy Agent",id:"user-proxy-agent",level:3},{value:"Assistant Agent",id:"assistant-agent",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"code-executors",children:"Code Executors"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/tutorial/code-executors.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/tutorial/code-executors.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.p,{children:"In the last chapter, we used two agents powered by a large language\nmodel (LLM) to play a game by exchanging messages. In this chapter, we\nintroduce code executors, which enable agents to not just chat but also\nto interact with an environment and perform useful computations and take\nactions."}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["In AutoGen, a code executor is a component that takes input messages\n(e.g., those containing code blocks), performs execution, and outputs\nmessages with the results. AutoGen provides two types of built-in code\nexecutors, one is command line code executor, which runs code in a\ncommand line environment such as a UNIX shell, and the other is Jupyter\nexecutor, which runs code in an interactive ",(0,o.jsx)(n.a,{href:"https://github.com/jupyter/jupyter/wiki/Jupyter-kernels",children:"Jupyter\nkernel"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For each type of executor, AutoGen provides two ways to execute code:\nlocally and in a Docker container. One way is to execute code directly\nin the same host platform where AutoGen is running, i.e., the local\noperating system. It is for development and testing, but it is not ideal\nfor production as LLM can generate arbitrary code. The other way is to\nexecute code in a Docker container. The table below shows the\ncombinations of code executors and execution environments."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.th,{children:["Code Executor (",(0,o.jsx)(n.code,{children:"autogen.coding"}),")"]}),(0,o.jsx)(n.th,{children:"Environment"}),(0,o.jsx)(n.th,{children:"Platform"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../../docs/reference/coding/local_commandline_code_executor#localcommandlinecodeexecutor",children:(0,o.jsx)(n.code,{children:"LocalCommandLineCodeExecutor"})})}),(0,o.jsx)(n.td,{children:"Shell"}),(0,o.jsx)(n.td,{children:"Local"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../../docs/reference/coding/docker_commandline_code_executor#dockercommandlinecodeexecutor",children:(0,o.jsx)(n.code,{children:"DockerCommandLineCodeExecutor"})})}),(0,o.jsx)(n.td,{children:"Shell"}),(0,o.jsx)(n.td,{children:"Docker"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../../docs/reference/coding/jupyter/jupyter_code_executor#jupytercodeexecutor",children:(0,o.jsx)(n.code,{children:"jupyter.JupyterCodeExecutor"})})}),(0,o.jsx)(n.td,{children:"Jupyter Kernel (e.g., python3)"}),(0,o.jsx)(n.td,{children:"Local/Docker"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["In this chapter, we will focus on the command line code executors. For\nthe Jupyter code executor, please refer to the topic page for ",(0,o.jsx)(n.a,{href:"../topics/code-execution/jupyter-code-executor",children:"Jupyter\nCode Executor"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"local-execution",children:"Local Execution"}),"\n",(0,o.jsxs)(n.p,{children:["The figure below shows the architecture of the local command line code\nexecutor\n(",(0,o.jsx)(n.a,{href:"../../docs/reference/coding/local_commandline_code_executor#localcommandlinecodeexecutor",children:(0,o.jsx)(n.code,{children:"autogen.coding.LocalCommandLineCodeExecutor"})}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"Executing LLM-generated code poses a security risk to your host environment."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Code Executor No Docker",src:t(1072).Z+"",width:"605",height:"469"})}),"\n",(0,o.jsx)(n.p,{children:"Upon receiving a message with a code block, the local command line code\nexecutor first writes the code block to a code file, then starts a new\nsubprocess to execute the code file. The executor reads the console\noutput of the code execution and sends it back as a reply message."}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example of using the code executor to run a Python code block\nthat prints a random number. First we create an agent with the code\nexecutor that uses a temporary directory to store the code files. We\nspecify ",(0,o.jsx)(n.code,{children:'human_input_mode="ALWAYS"'})," to manually validate the safety of\nthe the code being executed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import tempfile\nfrom autogen import ConversableAgent\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\n# Create a temporary directory to store the code files.\ntemp_dir = tempfile.TemporaryDirectory()\n\n# Create a local command line code executor.\nexecutor = LocalCommandLineCodeExecutor(\n    timeout=10,  # Timeout for each code execution in seconds.\n    work_dir=temp_dir.name,  # Use the temporary directory to store the code files.\n)\n\n# Create an agent with code executor configuration.\ncode_executor_agent = ConversableAgent(\n    "code_executor_agent",\n    llm_config=False,  # Turn off LLM for this agent.\n    code_execution_config={"executor": executor},  # Use the local command line code executor.\n    human_input_mode="ALWAYS",  # Always take human input for this agent for safety.\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Before running this example, we need to make sure the ",(0,o.jsx)(n.code,{children:"matplotlib"})," and\n",(0,o.jsx)(n.code,{children:"numpy"})," are installed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"! pip install -qqq matplotlib numpy\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we have the agent generate a reply given a message with a Python\ncode block."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'message_with_code_block = """This is a message with code block.\nThe code block is below:\n```python\nimport numpy as np\nimport matplotlib.pyplot as plt\nx = np.random.randint(0, 100, 100)\ny = np.random.randint(0, 100, 100)\nplt.scatter(x, y)\nplt.savefig(\'scatter.png\')\nprint(\'Scatter plot saved to scatter.png\')\n```\nThis is the end of the message.\n"""\n\n# Generate a reply for the given code.\nreply = code_executor_agent.generate_reply(messages=[{"role": "user", "content": message_with_code_block}])\nprint(reply)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\nexitcode: 0 (execution succeeded)\nCode output: \nScatter plot saved to scatter.png\n"})}),"\n",(0,o.jsx)(n.p,{children:"During the generation of response, a human input is requested to give an\nopportunity to intercept the code execution. In this case, we choose to\ncontinue the execution, and the agent\u2019s reply contains the output of the\ncode execution."}),"\n",(0,o.jsx)(n.p,{children:"We can take a look at the generated plot in the temporary directory."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import os\n\nprint(os.listdir(temp_dir))\n# We can see the output scatter.png and the code file generated by the agent.\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"['scatter.png', '6507ea07b63b45aabb027ade4e213de6.py']\n"})}),"\n",(0,o.jsx)(n.p,{children:"Clean up the working directory to avoid affecting future conversations."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"temp_dir.cleanup()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-execution",children:"Docker Execution"}),"\n",(0,o.jsxs)(n.p,{children:["To mitigate the security risk of running LLM-generated code locally, we\ncan use the docker command line code executor\n(",(0,o.jsx)(n.a,{href:"../../docs/reference/coding/docker_commandline_code_executor#dockercommandlinecodeexecutor",children:(0,o.jsx)(n.code,{children:"autogen.coding.DockerCommandLineCodeExecutor"})}),")\nto execute code in a docker container. This way, the generated code can\nonly access resources that are explicitly given to it."]}),"\n",(0,o.jsx)(n.p,{children:"The figure below illustrates how does the docker execution works."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Code Executor Docker",src:t(84621).Z+"",width:"699",height:"469"})}),"\n",(0,o.jsx)(n.p,{children:"Similar to the local command line code executor, the docker executor\nextracts code blocks from input messages, writes them to code files. For\neach code file, it starts a docker container to execute the code file,\nand reads the console output of the code execution."}),"\n",(0,o.jsxs)(n.p,{children:["To use docker execution, you need to ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"install\nDocker"})," on your machine. Once\nyou have Docker installed and running, you can set up your code executor\nagent as follow:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from autogen.coding import DockerCommandLineCodeExecutor\n\n# Create a temporary directory to store the code files.\ntemp_dir = tempfile.TemporaryDirectory()\n\n# Create a Docker command line code executor.\nexecutor = DockerCommandLineCodeExecutor(\n    image="python:3.12-slim",  # Execute code using the given docker image name.\n    timeout=10,  # Timeout for each code execution in seconds.\n    work_dir=temp_dir.name,  # Use the temporary directory to store the code files.\n)\n\n# Create an agent with code executor configuration that uses docker.\ncode_executor_agent_using_docker = ConversableAgent(\n    "code_executor_agent_docker",\n    llm_config=False,  # Turn off LLM for this agent.\n    code_execution_config={"executor": executor},  # Use the docker command line code executor.\n    human_input_mode="ALWAYS",  # Always take human input for this agent for safety.\n)\n\n# When the code executor is no longer used, stop it to release the resources.\n# executor.stop()\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"work_dir"})," in the constructor points to a local file system\ndirectory just like in the local execution case. The docker container\nwill mount this directory and the executor write code files and output\nto it."]}),"\n",(0,o.jsx)(n.h2,{id:"use-code-execution-in-conversation",children:"Use Code Execution in Conversation"}),"\n",(0,o.jsx)(n.p,{children:"Writing and executing code is necessary for many tasks such as data\nanalysis, machine learning, and mathematical modeling. In AutoGen,\ncoding can be a conversation between a code writer agent and a code\nexecutor agent, mirroring the interaction between a programmer and a\ncode interpreter."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Code Writer and Code Executor",src:t(96236).Z+"",width:"677",height:"244"})}),"\n",(0,o.jsx)(n.p,{children:"The code writer agent can be powered by an LLM such as GPT-4 with\ncode-writing capability. And the code executor agent is powered by a\ncode executor."}),"\n",(0,o.jsxs)(n.p,{children:["The following is an agent with a code writer role specified using\n",(0,o.jsx)(n.code,{children:"system_message"}),". The system message contains important instruction on\nhow to use the code executor in the code executor agent."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# The code writer agent\'s system message is to instruct the LLM on how to use\n# the code executor in the code executor agent.\ncode_writer_system_message = """You are a helpful AI assistant.\nSolve tasks using your coding and language skills.\nIn the following cases, suggest python code (in a python coding block) or shell script (in a sh coding block) for the user to execute.\n1. When you need to collect info, use the code to output the info you need, for example, browse or search the web, download/read a file, print the content of a webpage or a file, get the current date/time, check the operating system. After sufficient info is printed and the task is ready to be solved based on your language skill, you can solve the task by yourself.\n2. When you need to perform some task with code, use the code to perform the task and output the result. Finish the task smartly.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can\'t modify your code. So do not suggest incomplete code which requires users to modify. Don\'t use a code block if it\'s not intended to be executed by the user.\nIf you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line. Don\'t include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use \'print\' function for the output when relevant. Check the execution result returned by the user.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can\'t be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\nReply \'TERMINATE\' in the end when everything is done.\n"""\n\ncode_writer_agent = ConversableAgent(\n    "code_writer_agent",\n    system_message=code_writer_system_message,\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    code_execution_config=False,  # Turn off code execution for this agent.\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of solving a math problem through a conversation\nbetween the code writer agent and the code executor agent (created\nabove)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'chat_result = code_executor_agent.initiate_chat(\n    code_writer_agent,\n    message="Write Python code to calculate the 14th Fibonacci number.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'code_executor_agent (to code_writer_agent):\n\nWrite Python code to calculate the 14th Fibonacci number.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\ncode_writer_agent (to code_executor_agent):\n\nSure, here is a Python code snippet to calculate the 14th Fibonacci number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.\n\n```python\ndef fibonacci(n):\n    if(n <= 0):\n        return "Input should be a positive integer."\n    elif(n == 1):\n        return 0\n    elif(n == 2):\n        return 1\n    else:\n        fib = [0, 1]\n        for i in range(2, n):\n            fib.append(fib[i-1] + fib[i-2])\n        return fib[n-1]\n\nprint(fibonacci(14))\n```\n\nThis Python code defines a function `fibonacci(n)` which computes the n-th Fibonacci number. The function uses a list `fib` to store the Fibonacci numbers as they are computed, and then returns the (n-1)-th element as the n-th Fibonacci number due to zero-indexing in Python lists.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\ncode_executor_agent (to code_writer_agent):\n\nexitcode: 0 (execution succeeded)\nCode output: \n233\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\ncode_writer_agent (to code_executor_agent):\n\nGreat, the execution was successful and the 14th Fibonacci number is 233. The sequence goes as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233... and so on, where each number is the sum of the previous two. Therefore, the 14th number in the Fibonacci series is 233. \n\nI hope this meets your expectations. If you have any other concerns or need further computations, feel free to ask.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(n.p,{children:"During the previous chat session, human input was requested each time\nthe code executor agent responded to ensure that the code was safe to\nexecute."}),"\n",(0,o.jsx)(n.p,{children:"Now we can try a more complex example that involves querying the web.\nLet\u2019s say we want to get the the stock price gains year-to-date for\nTesla and Meta (formerly Facebook). We can also use the two agents with\nseveral iterations of conversation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import datetime\n\ntoday = datetime.datetime.now().strftime("%Y-%m-%d")\nchat_result = code_executor_agent.initiate_chat(\n    code_writer_agent,\n    message=f"Today is {today}. Write Python code to plot TSLA\'s and META\'s "\n    "stock price gains YTD, and save the plot to a file named \'stock_gains.png\'.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"code_executor_agent (to code_writer_agent):\n\nToday is 2024-02-28. Write Python code to plot TSLA's and META's stock price gains YTD, and save the plot to a file named 'stock_gains.png'.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\ncode_writer_agent (to code_executor_agent):\n\nThis task requires retrieving the historical data of the stocks from a reliable data source and calculating the Year-To-Date (YTD) gain values, and then plotting them. pandas_datareader library will be used for data retrieval, pandas will be used for data manipulation, and matplotlib for plotting. \n\nBelow is the Python code to achieve this. To start, please install the required libraries by running to the following command:\n```sh\npip install yfinance pandas matplotlib\n```\nThen run the python code:\n\n```python\n# filename: stock_gains.py\n\nimport yfinance as yf\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom datetime import datetime\n\n# define the tickers\ntickers = ['TSLA', 'META'] \n\n# define the start and end dates\nstart_date = datetime(2024, 1, 1)\nend_date = datetime(2024, 2, 28)\n\n# dictionary to hold dataframes\ndfs = {}\n\nfor ticker in tickers:\n    # get the data for the stocks\n    df = yf.download(ticker, start_date, end_date)\n\n    # get the close price and calculate the cumulative percentage gain\n    df['Gain'] = df['Close'].pct_change().cumsum()\n\n    # add to dictionary\n    dfs[ticker] = df    \n\n# plot\nplt.figure(figsize=(10, 5))\nfor ticker, df in dfs.items():\n    plt.plot(df.index, df['Gain'], label=ticker)\n\nplt.title('YTD Stock Price Gain')\nplt.xlabel('Date')\nplt.ylabel('Percentage Gain')\nplt.legend()\n\nplt.grid(True)\nplt.savefig('stock_gains.png')\nplt.close()\n\nprint(\"The 'stock_gains.png' file has been successfully saved\")\n```\nThis script will download the historical data for TSLA and META from the start of the year to the specified date and calculates the YTD gains. It then generates the plot showing these gains and saves it to 'stock_gains.png'.\n\nPlease save the script to a file named 'stock_gains.py' and run it using Python. Remember to have the correct start and end dates for the YTD value when running the script. If your Python version is below 3.8, you should update it to execute this code perfectly.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is sh)...\n\n>>>>>>>> EXECUTING CODE BLOCK 1 (inferred language is python)...\ncode_executor_agent (to code_writer_agent):\n\nexitcode: 0 (execution succeeded)\nCode output: \nRequirement already satisfied: yfinance in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (0.2.36)\nRequirement already satisfied: pandas in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (2.1.4)\nRequirement already satisfied: matplotlib in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (3.8.2)\nRequirement already satisfied: numpy>=1.16.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.26.2)\nRequirement already satisfied: requests>=2.31 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2.31.0)\nRequirement already satisfied: multitasking>=0.0.7 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (0.0.11)\nRequirement already satisfied: lxml>=4.9.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (5.0.1)\nRequirement already satisfied: appdirs>=1.4.4 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.4.4)\nRequirement already satisfied: pytz>=2022.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2023.3.post1)\nRequirement already satisfied: frozendict>=2.3.4 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2.4.0)\nRequirement already satisfied: peewee>=3.16.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (3.17.0)\nRequirement already satisfied: beautifulsoup4>=4.11.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (4.12.2)\nRequirement already satisfied: html5lib>=1.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.1)\nRequirement already satisfied: python-dateutil>=2.8.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from pandas) (2.8.2)\nRequirement already satisfied: tzdata>=2022.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from pandas) (2023.4)\nRequirement already satisfied: contourpy>=1.0.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (1.2.0)\nRequirement already satisfied: cycler>=0.10 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (0.12.1)\nRequirement already satisfied: fonttools>=4.22.0 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (4.47.2)\nRequirement already satisfied: kiwisolver>=1.3.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (1.4.5)\nRequirement already satisfied: packaging>=20.0 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (23.2)\nRequirement already satisfied: pillow>=8 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (10.2.0)\nRequirement already satisfied: pyparsing>=2.3.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (3.1.1)\nRequirement already satisfied: soupsieve>1.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from beautifulsoup4>=4.11.1->yfinance) (2.5)\nRequirement already satisfied: six>=1.9 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from html5lib>=1.1->yfinance) (1.16.0)\nRequirement already satisfied: webencodings in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from html5lib>=1.1->yfinance) (0.5.1)\nRequirement already satisfied: charset-normalizer<4,>=2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (3.3.2)\nRequirement already satisfied: idna<4,>=2.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (3.6)\nRequirement already satisfied: urllib3<3,>=1.21.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (2.1.0)\nRequirement already satisfied: certifi>=2017.4.17 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (2024.2.2)\n\nThe 'stock_gains.png' file has been successfully saved\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\ncode_writer_agent (to code_executor_agent):\n\nGreat! The code executed successfully and the 'stock_gains.png' file has been saved successfully. This file contains the plot of TSLA's and META's stock price gains from the start of the year until February 28, 2024. You should now be able to view this image file in the same directory that you ran the script from. \n\nPlease make sure to verify this image file. It should contain two plotted lines, each representing the percentage gain over the time for each stock (TSLA and META). The x-axis represents the date, and the y-axis represents the percentage gain. If everything looks correct, this would be the end of the task.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the previous conversation, the code writer agent generated a code\nblock to install necessary packages and another code block for a script\nto fetch the stock price and calculate gains year-to-date for Tesla and\nMeta. The code executor agent installed the packages, executed the\nscript, and returned the results."}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s take a look at the chart that was generated."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from IPython.display import Image\n\nImage(os.path.join(temp_dir, "stock_gains.png"))\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(53333).Z+"",width:"1000",height:"500"})}),"\n",(0,o.jsx)(n.p,{children:"Because code execution leave traces like code files and output in the\nfile system, we may want to clean up the working directory after each\nconversation concludes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"temp_dir.cleanup()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Stop the docker command line executor to clean up the docker container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"executor.stop()  # Stop the docker command line code executor.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"command-line-or-jupyter-code-executor",children:"Command Line or Jupyter Code Executor?"}),"\n",(0,o.jsx)(n.p,{children:"The command line code executor does not keep any state in memory between\nexecutions of different code blocks it receives, as it writes each code\nblock to a separate file and executes the code block in a new process."}),"\n",(0,o.jsxs)(n.p,{children:["Contrast to the command line code executor, the Jupyter code executor\nruns all code blocks in the same Jupyter kernel, which keeps the state\nin memory between executions. See the topic page for ",(0,o.jsx)(n.a,{href:"../topics/code-execution/jupyter-code-executor",children:"Jupyter Code\nExecutor"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The choice between command line and Jupyter code executor depends on the\nnature of the code blocks in agents\u2019 conversation. If each code block is\na \u201cscript\u201d that does not use variables from previous code blocks, the\ncommand line code executor is a good choice. If the some conde blocks\ncontain expensive computation (e.g., training a machine learning model\nand loading large amount of data), and you want to keep the state in\nmemory to avoid repeated computation, the Jupyter code executor is a\nbetter choice."}),"\n",(0,o.jsx)(n.h2,{id:"note-on-user-proxy-agent-and-assistant-agent",children:"Note on User Proxy Agent and Assistant Agent"}),"\n",(0,o.jsx)(n.h3,{id:"user-proxy-agent",children:"User Proxy Agent"}),"\n",(0,o.jsxs)(n.p,{children:["In the previous examples, we create the code executor agent directly\nusing the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#conversableagent",children:(0,o.jsx)(n.code,{children:"ConversableAgent"})}),"\nclass. Existing AutoGen examples often create code executor agent using\nthe\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/user_proxy_agent#userproxyagent",children:(0,o.jsx)(n.code,{children:"UserProxyAgent"})}),"\nclass, which is a subclass of\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#conversableagent",children:(0,o.jsx)(n.code,{children:"ConversableAgent"})}),"\nwith ",(0,o.jsx)(n.code,{children:"human_input_mode=ALWAYS"})," and ",(0,o.jsx)(n.code,{children:"llm_config=False"})," \u2013 it always\nrequests human input for every message and does not use LLM. It also\ncomes with default ",(0,o.jsx)(n.code,{children:"description"})," field for each of the\n",(0,o.jsx)(n.code,{children:"human_input_mode"})," setting. This class is a convenient short-cut for\ncreating an agent that is intended to be used as a code executor."]}),"\n",(0,o.jsx)(n.h3,{id:"assistant-agent",children:"Assistant Agent"}),"\n",(0,o.jsxs)(n.p,{children:["In the previous examples, we created the code writer agent directly\nusing the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#conversableagent",children:(0,o.jsx)(n.code,{children:"ConversableAgent"})}),"\nclass. Existing AutoGen examples often create the code writer agent\nusing the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/assistant_agent#assistantagent",children:(0,o.jsx)(n.code,{children:"AssistantAgent"})}),"\nclass, which is a subclass of\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#conversableagent",children:(0,o.jsx)(n.code,{children:"ConversableAgent"})}),"\nwith ",(0,o.jsx)(n.code,{children:"human_input_mode=NEVER"})," and ",(0,o.jsx)(n.code,{children:"code_execution_config=False"})," \u2013 it\nnever requests human input and does not use code executor. It also comes\nwith default ",(0,o.jsx)(n.code,{children:"system_message"})," and ",(0,o.jsx)(n.code,{children:"description"})," fields. This class is a\nconvenient short-cut for creating an agent that is intended to be used\nas a code writer and does not execute code."]}),"\n",(0,o.jsxs)(n.p,{children:["In fact, in the previous example we use the default ",(0,o.jsx)(n.code,{children:"system_message"}),"\nfield of the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/assistant_agent#assistantagent",children:(0,o.jsx)(n.code,{children:"AssistantAgent"})}),"\nclass to instruct the code writer agent how to use code executor."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import pprint\nfrom autogen import AssistantAgent\n\npprint.pprint(AssistantAgent.DEFAULT_SYSTEM_MESSAGE)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"('You are a helpful AI assistant.\\n'\n 'Solve tasks using your coding and language skills.\\n'\n 'In the following cases, suggest python code (in a python coding block) or '\n 'shell script (in a sh coding block) for the user to execute.\\n'\n '    1. When you need to collect info, use the code to output the info you '\n 'need, for example, browse or search the web, download/read a file, print the '\n 'content of a webpage or a file, get the current date/time, check the '\n 'operating system. After sufficient info is printed and the task is ready to '\n 'be solved based on your language skill, you can solve the task by yourself.\\n'\n '    2. When you need to perform some task with code, use the code to perform '\n 'the task and output the result. Finish the task smartly.\\n'\n 'Solve the task step by step if you need to. If a plan is not provided, '\n 'explain your plan first. Be clear which step uses code, and which step uses '\n 'your language skill.\\n'\n 'When using code, you must indicate the script type in the code block. The '\n 'user cannot provide any other feedback or perform any other action beyond '\n \"executing the code you suggest. The user can't modify your code. So do not \"\n \"suggest incomplete code which requires users to modify. Don't use a code \"\n \"block if it's not intended to be executed by the user.\\n\"\n 'If you want the user to save the code in a file before executing it, put # '\n \"filename: <filename> inside the code block as the first line. Don't include \"\n 'multiple code blocks in one response. Do not ask users to copy and paste the '\n \"result. Instead, use 'print' function for the output when relevant. Check \"\n 'the execution result returned by the user.\\n'\n 'If the result indicates there is an error, fix the error and output the code '\n 'again. Suggest the full code instead of partial code or code changes. If the '\n \"error can't be fixed or if the task is not solved even after the code is \"\n 'executed successfully, analyze the problem, revisit your assumption, collect '\n 'additional info you need, and think of a different approach to try.\\n'\n 'When you find an answer, verify the answer carefully. Include verifiable '\n 'evidence in your response if possible.\\n'\n 'Reply \"TERMINATE\" in the end when everything is done.\\n'\n '    ')\n"})}),"\n",(0,o.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,o.jsxs)(n.p,{children:["It is very important to note that the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/user_proxy_agent#userproxyagent",children:(0,o.jsx)(n.code,{children:"UserProxyAgent"})}),"\nand\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/assistant_agent#assistantagent",children:(0,o.jsx)(n.code,{children:"AssistantAgent"})}),"\nare meant to be shortcuts to avoid writing the ",(0,o.jsx)(n.code,{children:"system_message"}),"\ninstructions for the\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/conversable_agent#conversableagent",children:(0,o.jsx)(n.code,{children:"ConversableAgent"})}),"\nclass. They are not suitable for all use cases. As we will show in the\nnext chapter, tuning the ",(0,o.jsx)(n.code,{children:"system_message"})," field is vital for agent to\nwork properly in more complex conversation patterns beyond two-agent\nchat."]}),"\n",(0,o.jsxs)(n.p,{children:["As a best practice, always tune your agent\u2019s ",(0,o.jsx)(n.code,{children:"system_message"}),"\ninstructions for your specific use case and avoid subclassing\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/user_proxy_agent#userproxyagent",children:(0,o.jsx)(n.code,{children:"UserProxyAgent"})}),"\nand\n",(0,o.jsx)(n.a,{href:"../../docs/reference/agentchat/assistant_agent#assistantagent",children:(0,o.jsx)(n.code,{children:"AssistantAgent"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"In this chapter, we introduced code executors, how to set up Docker and\nlocal execution, and how to use code execution in a conversation to\nsolve tasks. In the next chapter, we will introduce tool use, which is\nsimilar to code executors but restricts what code agent can execute."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},96236:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/code-execution-in-conversation-f02c7a3ea7e45e3f4aa71d8def851677.png"},84621:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/code-executor-docker-8d3f56a6bb4b4605fec68804350f42fc.png"},1072:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/code-executor-no-docker-0ec717a62637ff02e852efa284dd50d5.png"},53333:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-1-c3c88f04ea37b445ba959b17cd9f22e5.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5272],{30775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const s={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_groupchat_finite_state_machine.ipynb",description:"Explore the demonstration of the Finite State Machine implementation, which allows the user to input speaker transition constraints.",source_notebook:"/notebook/agentchat_groupchat_finite_state_machine.ipynb",tags:["orchestration"],title:"FSM - User can input speaker transition constraints"},i="FSM - User can input speaker transition constraints",r={id:"notebooks/agentchat_groupchat_finite_state_machine",title:"FSM - User can input speaker transition constraints",description:"Explore the demonstration of the Finite State Machine implementation, which allows the user to input speaker transition constraints.",source:"@site/docs/notebooks/agentchat_groupchat_finite_state_machine.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_groupchat_finite_state_machine",permalink:"/autogen/docs/notebooks/agentchat_groupchat_finite_state_machine",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_groupchat_finite_state_machine.ipynb",tags:[{label:"orchestration",permalink:"/autogen/docs/tags/orchestration"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_groupchat_finite_state_machine.ipynb",description:"Explore the demonstration of the Finite State Machine implementation, which allows the user to input speaker transition constraints.",source_notebook:"/notebook/agentchat_groupchat_finite_state_machine.ipynb",tags:["orchestration"],title:"FSM - User can input speaker transition constraints"},sidebar:"notebooksSidebar",previous:{title:"Group Chat with Customized Speaker Selection Method",permalink:"/autogen/docs/notebooks/agentchat_groupchat_customized"},next:{title:"Perform Research with Multi-Agent Group Chat",permalink:"/autogen/docs/notebooks/agentchat_groupchat_research"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Possibly interesting transition paths",id:"possibly-interesting-transition-paths",level:3},{value:"Demonstration",id:"demonstration",level:2},{value:"Team Operations",id:"team-operations",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fsm---user-can-input-speaker-transition-constraints",children:"FSM - User can input speaker transition constraints"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_groupchat_finite_state_machine.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat_finite_state_machine.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,a.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This notebook is about using graphs to define the transition paths\namongst speakers."}),"\n",(0,a.jsx)(n.p,{children:"Benefits - This contribution fills the gap between the current modes of\nGroupChat Class (auto, manual, round_robin) and an expressive directed\ngraph. See Motivation for more detailed discussion."}),"\n",(0,a.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"pyautogen"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),(0,a.jsxs)(n.p,{children:["For more information, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"%%capture --no-stderr\n%pip install pyautogen[graph]>=0.2.11\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import random  # noqa E402\n\nimport matplotlib.pyplot as plt  # noqa E402\nimport networkx as nx  # noqa E402\n\nimport autogen  # noqa E402\nfrom autogen.agentchat.conversable_agent import ConversableAgent  # noqa E402\nfrom autogen.agentchat.assistant_agent import AssistantAgent  # noqa E402\nfrom autogen.agentchat.groupchat import GroupChat  # noqa E402\nfrom autogen.graph_utils import visualize_speaker_transitions_dict  # noqa E402\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(autogen.__version__)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"0.2.25\n"})}),"\n",(0,a.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,a.jsx)(n.p,{children:"The current GroupChat class allows transitioning to any agent (with or\nwithout the decision of the LLM), some use cases might demand for more\ncontrol over transition. A graph is a possible way to control the\ntransition paths, where each node represents an agent and each directed\nedge represents possible transition paths. Let\u2019s illustrate the current\ntransition paths for a GroupChat with five agents."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'config_list_gpt4 = {\n    "timeout": 600,\n    "cache_seed": 44,  # change the seed for different trials\n    "config_list": autogen.config_list_from_json(\n        "OAI_CONFIG_LIST",\n        filter_dict={"tags": ["gpt-4", "gpt-4-32k"]},  # comment out to get all\n    ),\n    "temperature": 0,\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'agents = [ConversableAgent(name=f"Agent{i}", llm_config=False) for i in range(5)]\nallowed_speaker_transitions_dict = {agent: [other_agent for other_agent in agents] for agent in agents}\n\nvisualize_speaker_transitions_dict(allowed_speaker_transitions_dict, agents)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(99056).Z+"",width:"660",height:"499"})}),"\n",(0,a.jsx)(n.h3,{id:"possibly-interesting-transition-paths",children:"Possibly interesting transition paths"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Hub and Spoke"}),"\n",(0,a.jsx)(n.li,{children:"Sequential Team Operations"}),"\n",(0,a.jsx)(n.li,{children:"Think aloud and debate"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'agents = [ConversableAgent(name=f"Agent{i}", llm_config=False) for i in range(5)]\nallowed_speaker_transitions_dict = {\n    agents[0]: [agents[1], agents[2], agents[3], agents[4]],\n    agents[1]: [agents[0]],\n    agents[2]: [agents[0]],\n    agents[3]: [agents[0]],\n    agents[4]: [agents[0]],\n}\n\nvisualize_speaker_transitions_dict(allowed_speaker_transitions_dict, agents)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(13959).Z+"",width:"660",height:"499"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Sequential Team Operations\n# Create an empty directed graph\n\nspeaker_transitions_dict = {}\nteams = ["A", "B", "C"]\nteam_size = 5\n\n\ndef get_agent_of_name(agents, name) -> ConversableAgent:\n    for agent in agents:\n        if agent.name == name:\n            return agent\n\n\n# Create a list of 15 agents 3 teams x 5 agents\nagents = [ConversableAgent(name=f"{team}{i}", llm_config=False) for team in teams for i in range(team_size)]\n\n# Loop through each team and add members and their connections\nfor team in teams:\n    for i in range(team_size):\n        member = f"{team}{i}"\n        # Connect each member to other members of the same team\n        speaker_transitions_dict[get_agent_of_name(agents, member)] = [\n            get_agent_of_name(agents, name=f"{team}{j}") for j in range(team_size) if j != i\n        ]\n\n# Team leaders connection\nprint(get_agent_of_name(agents, name="B0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "A0")].append(get_agent_of_name(agents, name="B0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "B0")].append(get_agent_of_name(agents, name="C0"))\n\nvisualize_speaker_transitions_dict(speaker_transitions_dict, agents)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"<autogen.agentchat.conversable_agent.ConversableAgent object at 0x7f605e116260>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(29782).Z+"",width:"660",height:"499"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'agents = [ConversableAgent(name=f"Agent{i}", llm_config=False) for i in range(2)]\nallowed_speaker_transitions_dict = {\n    agents[0]: [agents[0], agents[1]],\n    agents[1]: [agents[0], agents[1]],\n}\n\nvisualize_speaker_transitions_dict(allowed_speaker_transitions_dict, agents)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(31701).Z+"",width:"660",height:"499"})}),"\n",(0,a.jsx)(n.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GroupChat"})," now takes in two optional arguments. -\nallowed_or_disallowed_speaker_transitions: The keys are source agents,\nand the values are agents that the key agent can/can\u2019t transit to,\ndepending on speaker_transitions_type. Default is None, which means all\nagents can transit to all other agents. - speaker_transitions_type:\nwhether the speaker_transitions_type is a dictionary containing lists of\nallowed agents or disallowed agents. \u201callowed\u201d means the\n",(0,a.jsx)(n.code,{children:"allowed_or_disallowed_speaker_transitions"})," is a dictionary containing\nlists of allowed agents."]}),"\n",(0,a.jsx)(n.h3,{id:"team-operations",children:"Team Operations"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Create an empty directed graph\nagents = []\nspeaker_transitions_dict = {}\nsecret_values = {}\n\n# Outer loop for prefixes \'A\', \'B\', \'C\'\nfor prefix in ["A", "B", "C"]:\n    # Add 3 nodes with each prefix to the graph using a for loop\n    for i in range(3):\n        node_id = f"{prefix}{i}"\n        secret_value = random.randint(1, 5)  # Generate a random secret value\n        secret_values[node_id] = secret_value\n\n        # Create an AssistantAgent for each node (assuming AssistantAgent is a defined class)\n        agents.append(\n            AssistantAgent(\n                name=node_id,\n                system_message=f"""Your name is {node_id}.\n                                          Do not respond as the speaker named in the NEXT tag if your name is not in the NEXT tag. Instead, suggest a relevant team leader to handle the mis-tag, with the NEXT: tag.\n\n                                          You have {secret_value} chocolates.\n\n                                          The list of players are [A0, A1, A2, B0, B1, B2, C0, C1, C2].\n\n                                            Your first character of your name is your team, and your second character denotes that you are a team leader if it is 0.\n                                            CONSTRAINTS: Team members can only talk within the team, whilst team leader can talk to team leaders of other teams but not team members of other teams.\n\n                                            You can use NEXT: to suggest the next speaker. You have to respect the CONSTRAINTS, and can only suggest one player from the list of players, i.e., do not suggest A3 because A3 is not from the list of players.\n                                            Team leaders must make sure that they know the sum of the individual chocolate count of all three players in their own team, i.e., A0 is responsible for team A only.\n\n                                          Keep track of the player\'s tally using a JSON format so that others can check the total tally. Use\n                                          A0:?, A1:?, A2:?,\n                                          B0:?, B1:?, B2:?,\n                                          C0:?, C1:?, C2:?\n\n                                          If you are the team leader, you should aggregate your team\'s total chocolate count to cooperate.\n                                          Once the team leader know their team\'s tally, they can suggest another team leader for them to find their team tally, because we need all three team tallys to succeed.\n                                          Use NEXT: to suggest the next speaker, e.g., NEXT: A0.\n\n                                          Once we have the total tally from all nine players, sum up all three teams\' tally, then terminate the discussion using TERMINATE.\n\n                                          """,\n                llm_config=config_list_gpt4,\n            )\n        )\n        speaker_transitions_dict[agents[-1]] = []\n\n    # Add edges between nodes with the same prefix using a nested for loop\n    for source_node in range(3):\n        source_id = f"{prefix}{source_node}"\n        for target_node in range(3):\n            target_id = f"{prefix}{target_node}"\n            if source_node != target_node:  # To avoid self-loops\n                speaker_transitions_dict[get_agent_of_name(agents, source_id)].append(\n                    get_agent_of_name(agents, name=target_id)\n                )\n\n\n# Adding edges between teams\nspeaker_transitions_dict[get_agent_of_name(agents, "A0")].append(get_agent_of_name(agents, name="B0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "A0")].append(get_agent_of_name(agents, name="C0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "B0")].append(get_agent_of_name(agents, name="A0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "B0")].append(get_agent_of_name(agents, name="C0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "C0")].append(get_agent_of_name(agents, name="A0"))\nspeaker_transitions_dict[get_agent_of_name(agents, "C0")].append(get_agent_of_name(agents, name="B0"))\n\n\n# Visualization only\ngraph = nx.DiGraph()\n\n# Add nodes\ngraph.add_nodes_from([agent.name for agent in agents])\n\n# Add edges\nfor key, value in speaker_transitions_dict.items():\n    for agent in value:\n        graph.add_edge(key.name, agent.name)\n\n# Visualize\n# Draw the graph with secret values annotated\nplt.figure(figsize=(12, 10))\npos = nx.spring_layout(graph)  # positions for all nodes\n\n# Draw nodes with their colors\nnx.draw(graph, pos, with_labels=True, font_weight="bold")\n\n# Annotate secret values\nfor node, (x, y) in pos.items():\n    secret_value = secret_values[node]\n    plt.text(x, y + 0.1, s=f"Secret: {secret_value}", horizontalalignment="center")\n\nplt.show()\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(66774).Z+"",width:"1220",height:"1019"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Termination message detection\n\n\ndef is_termination_msg(content) -> bool:\n    have_content = content.get("content", None) is not None\n    if have_content and "TERMINATE" in content["content"]:\n        return True\n    return False\n\n\n# Terminates the conversation when TERMINATE is detected.\nuser_proxy = autogen.UserProxyAgent(\n    name="User_proxy",\n    system_message="Terminator admin.",\n    code_execution_config=False,\n    is_termination_msg=is_termination_msg,\n    human_input_mode="NEVER",\n)\n\nagents.append(user_proxy)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'group_chat = GroupChat(\n    agents=agents,\n    messages=[],\n    max_round=20,\n    allowed_or_disallowed_speaker_transitions=speaker_transitions_dict,\n    speaker_transitions_type="allowed",\n)\n\n\n# Create the manager\nmanager = autogen.GroupChatManager(\n    groupchat=group_chat,\n    llm_config=config_list_gpt4,\n    code_execution_config=False,\n    is_termination_msg=is_termination_msg,\n)\n\n\n# Initiates the chat with Alice\nagents[0].initiate_chat(\n    manager,\n    message="""\n                        There are 9 players in this game, split equally into Teams A, B, C. Therefore each team has 3 players, including the team leader.\n                        The task is to find out the sum of chocolate count from all nine players. I will now start with my team.\n                        NEXT: A1""",\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"WARNING:root:Warning: There are isolated agent nodes, there are not incoming nor outgoing edges. Isolated agents: ['User_proxy']\nWARNING:root:Warning: The set of agents in allowed_speaker_transitions do not match agents. Offending agents: ['User_proxy']\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"A0 (to chat_manager):\n\n\n                        There are 9 players in this game, split equally into Teams A, B, C. Therefore each team has 3 players, including the team leader.\n                        The task is to find out the sum of chocolate count from all nine players. I will now start with my team.\n                        NEXT: A1\n\n--------------------------------------------------------------------------------\nA1 (to chat_manager):\n\nAs the team leader of Team A, it's my responsibility to gather the chocolate count from my team members. I have 1 chocolate. \n\nA0:?, A1:1, A2:?,\n\nB0:?, B1:?, B2:?,\n\nC0:?, C1:?, C2:?\n\nNEXT: A2\n\n--------------------------------------------------------------------------------\nA2 (to chat_manager):\n\nI have 5 chocolates.\n\nA0:?, A1:1, A2:5,\n\nB0:?, B1:?, B2:?,\n\nC0:?, C1:?, C2:?\n\nNEXT: A0\n\n--------------------------------------------------------------------------------\nA0 (to chat_manager):\n\nI have 1 chocolate. Now that I have the counts from A1 and A2, I can calculate our team's total.\n\nA0:1, A1:1, A2:5,\n\nB0:?, B1:?, B2:?,\n\nC0:?, C1:?, C2:?\n\nTeam A's total tally is 7 chocolates. It's time to find out the tally from another team. I'll pass this to the next team leader.\n\nNEXT: B0\n\n--------------------------------------------------------------------------------\nB0 (to chat_manager):\n\nAs the team leader of Team B, it's my responsibility to gather the chocolate count from my team members. I have 1 chocolate.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:?, B2:?,\n\nC0:?, C1:?, C2:?\n\nNow, I need to find out the chocolate counts from B1 and B2.\n\nNEXT: B1\n\n--------------------------------------------------------------------------------\nB1 (to chat_manager):\n\nI have 3 chocolates.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:?,\n\nC0:?, C1:?, C2:?\n\nNEXT: B2\n\n--------------------------------------------------------------------------------\nB2 (to chat_manager):\n\nI have 4 chocolates. Now that I have the counts from B0 and B1, I can calculate our team's total.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:4,\n\nC0:?, C1:?, C2:?\n\nTeam B's total tally is 8 chocolates. It's time to find out the tally from the last team. I'll pass this to the next team leader.\n\nNEXT: C0\n\n--------------------------------------------------------------------------------\nB0 (to chat_manager):\n\nI'm sorry for any confusion, but it seems there's been a misunderstanding in the flow of communication. As B0, I should be the one to summarize the tally for Team B and pass the conversation to the next team leader. Let me correct that.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:4,\n\nC0:?, C1:?, C2:?\n\nWith the counts from B1 and B2, Team B's total tally is indeed 8 chocolates. Now, it's time to find out the tally from Team C. I'll pass this to the next team leader.\n\nNEXT: C0\n\n--------------------------------------------------------------------------------\nC0 (to chat_manager):\n\nAs the team leader of Team C, it's my responsibility to gather the chocolate count from my team members. I have 3 chocolates.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:4,\n\nC0:3, C1:?, C2:?\n\nNow, I need to find out the chocolate counts from C1 and C2.\n\nNEXT: C1\n\n--------------------------------------------------------------------------------\nC1 (to chat_manager):\n\nI have 3 chocolates.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:4,\n\nC0:3, C1:3, C2:?\n\nNEXT: C2\n\n--------------------------------------------------------------------------------\nC2 (to chat_manager):\n\nI have 2 chocolates. Now that I have the counts from C0 and C1, I can calculate our team's total.\n\nA0:1, A1:1, A2:5,\n\nB0:1, B1:3, B2:4,\n\nC0:3, C1:3, C2:2\n\nTeam C's total tally is 8 chocolates. Now that we have the tallies from all teams, we can sum them up.\n\nTeam A's total is 7 chocolates, Team B's total is 8 chocolates, and Team C's total is 8 chocolates. The grand total is 23 chocolates.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': '\\n                        There are 9 players in this game, split equally into Teams A, B, C. Therefore each team has 3 players, including the team leader.\\n                        The task is to find out the sum of chocolate count from all nine players. I will now start with my team.\\n                        NEXT: A1', 'role': 'assistant'}, {'content': \"As the team leader of Team A, it's my responsibility to gather the chocolate count from my team members. I have 1 chocolate. \\n\\nA0:?, A1:1, A2:?,\\n\\nB0:?, B1:?, B2:?,\\n\\nC0:?, C1:?, C2:?\\n\\nNEXT: A2\", 'name': 'A1', 'role': 'user'}, {'content': 'I have 5 chocolates.\\n\\nA0:?, A1:1, A2:5,\\n\\nB0:?, B1:?, B2:?,\\n\\nC0:?, C1:?, C2:?\\n\\nNEXT: A0', 'name': 'A2', 'role': 'user'}, {'content': \"I have 1 chocolate. Now that I have the counts from A1 and A2, I can calculate our team's total.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:?, B1:?, B2:?,\\n\\nC0:?, C1:?, C2:?\\n\\nTeam A's total tally is 7 chocolates. It's time to find out the tally from another team. I'll pass this to the next team leader.\\n\\nNEXT: B0\", 'role': 'assistant'}, {'content': \"As the team leader of Team B, it's my responsibility to gather the chocolate count from my team members. I have 1 chocolate.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:?, B2:?,\\n\\nC0:?, C1:?, C2:?\\n\\nNow, I need to find out the chocolate counts from B1 and B2.\\n\\nNEXT: B1\", 'name': 'B0', 'role': 'user'}, {'content': 'I have 3 chocolates.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:?,\\n\\nC0:?, C1:?, C2:?\\n\\nNEXT: B2', 'name': 'B1', 'role': 'user'}, {'content': \"I have 4 chocolates. Now that I have the counts from B0 and B1, I can calculate our team's total.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:?, C1:?, C2:?\\n\\nTeam B's total tally is 8 chocolates. It's time to find out the tally from the last team. I'll pass this to the next team leader.\\n\\nNEXT: C0\", 'name': 'B2', 'role': 'user'}, {'content': \"I'm sorry for any confusion, but it seems there's been a misunderstanding in the flow of communication. As B0, I should be the one to summarize the tally for Team B and pass the conversation to the next team leader. Let me correct that.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:?, C1:?, C2:?\\n\\nWith the counts from B1 and B2, Team B's total tally is indeed 8 chocolates. Now, it's time to find out the tally from Team C. I'll pass this to the next team leader.\\n\\nNEXT: C0\", 'name': 'B0', 'role': 'user'}, {'content': \"As the team leader of Team C, it's my responsibility to gather the chocolate count from my team members. I have 3 chocolates.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:3, C1:?, C2:?\\n\\nNow, I need to find out the chocolate counts from C1 and C2.\\n\\nNEXT: C1\", 'name': 'C0', 'role': 'user'}, {'content': 'I have 3 chocolates.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:3, C1:3, C2:?\\n\\nNEXT: C2', 'name': 'C1', 'role': 'user'}, {'content': \"I have 2 chocolates. Now that I have the counts from C0 and C1, I can calculate our team's total.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:3, C1:3, C2:2\\n\\nTeam C's total tally is 8 chocolates. Now that we have the tallies from all teams, we can sum them up.\\n\\nTeam A's total is 7 chocolates, Team B's total is 8 chocolates, and Team C's total is 8 chocolates. The grand total is 23 chocolates.\\n\\nTERMINATE\", 'name': 'C2', 'role': 'user'}], summary=\"I have 2 chocolates. Now that I have the counts from C0 and C1, I can calculate our team's total.\\n\\nA0:1, A1:1, A2:5,\\n\\nB0:1, B1:3, B2:4,\\n\\nC0:3, C1:3, C2:2\\n\\nTeam C's total tally is 8 chocolates. Now that we have the tallies from all teams, we can sum them up.\\n\\nTeam A's total is 7 chocolates, Team B's total is 8 chocolates, and Team C's total is 8 chocolates. The grand total is 23 chocolates.\\n\\n\", cost={'usage_including_cached_inference': {'total_cost': 0.5525399999999999, 'gpt-4': {'cost': 0.5525399999999999, 'prompt_tokens': 18174, 'completion_tokens': 122, 'total_tokens': 18296}}, 'usage_excluding_cached_inference': {'total_cost': 0.5525399999999999, 'gpt-4': {'cost': 0.5525399999999999, 'prompt_tokens': 18174, 'completion_tokens': 122, 'total_tokens': 18296}}}, human_input=[])\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},66774:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/cell-10-output-1-eb8b942a5a5c7db2715a4ae2da7e3fdd.png"},99056:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/cell-6-output-1-1b4890ac1a037c7d504f28a2f10b27f1.png"},13959:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/cell-7-output-1-280fa84d609820ac6be0ccc5c07e846c.png"},29782:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/cell-8-output-2-aa934598a2535083dd874378b7e15f04.png"},31701:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/cell-9-output-1-efd680736b9ac47cf2204f9f8ffccb24.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
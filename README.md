# Auto-BTC - The First Autonomous Multi-Agent AI on Bitcoin

Think AutoGPT but fine-tuned on Stacks smart contracts and docs with Stacks JS and Clarinet allowing for autonomous multi-agent interaction on chain.

[![YouTube Video Link](https://img.youtube.com/vi/H4Y0irC582k/maxresdefault.jpg)](https://youtu.be/H4Y0irC582k)

<img width="1510" alt="Screenshot 2023-10-22 at 11 45 35" src="https://github.com/jjjutla/Auto-BTC/assets/22000925/756944cc-4bf6-448d-bd0e-10d75668ab7c">

# Why?
Despite having modern AI tools like GPT-4 and associated interfaces such as Cursor AI, which are capable of reading documents and engaging with code, there's still a noticeable gap in achieving optimal utilization of these systems. Examples like [XBTCBot](https://xbtcbot.xyz/) and [w3gpt.ai](http://w3gpt.ai/) illustrate the potential for on-chain interactions, but there's a problem.

The main limitation often arises from our human interactions – the need to construct appropriate prompts and our problem-solving capability. As a result, we barely scratch the surface of the true intelligence and capability these models possess. For those new to the ecosystem, not knowing the right questions to ask or prompts to use can sometimes be detrimental rather than beneficial.

Enter Auto-BTC: a solution that goes beyond these challenges. It's not just one AI model but three, with two being finely tuned. These models are self-prompting and can recursively call themselves. This architecture eliminates the issue faced by newcomers to blockchain who might be unfamiliar with terms like 'smart contract' or 'NFT'. AutoBTC empowers users, allowing them to provide broad, high-level prompts. The system then autonomously generates a comprehensive task list to address the query, bridging the gap between complex technology and user understanding and by pairing it with StacksJS and Clarity, it can write, test deploy and interact with your smart contracts autonomously. 


# Features:
- **Intuitive Prompt System:** Users simply provide a general or high-level prompt about 'stacks', and Auto-BTC, with the help of a finely tuned model and task creation mechanism, generates a clear and prioritized list of tasks to address, eliminating the need for manual coding or problem-solving and making it easier than ever to non-board technical and non-technical users to web3.

- **Enhanced Memory:** Utilizing two vector databases (via Pinecone), we store the entire conversation thread and the task prioritization queue. This addresses the common issue with most large language models where details can be forgotten over extended interactions.

- **Fine-Tuned GPT-3.5 Execution Model:** Trained on SP900 smart contract examples, this model is equipped to:
  - Develop smart contracts based on a given prompt.
  - Decompose and explain smart contract functionalities.
  - Develop tests for smart contracts.
  - Convert and translate between Rust/Solidity smart contracts to Clarity.
  - Debug and fix issues in smart contracts.
  - Enhance and optimize smart contract performance.

- **One Click Deployment to Stacks:** Using StacksJS in the Web UI the user can connect their wallet and deploy the contract with a click of a button.

- **GPT-3.5 Task Creation Model:** Fine-tuned on the Clarinent documentation used for autonomous testing of the contracts

- **GPT-4 API Integration:** Used to abstract information and produce comprehensive task lists efficiently.



# How it works?:
### Autonomous Multi-Agent AI Model
The Auto-BTC multimodal model operates exclusively within a local development environment using a cli interface due to safety and technical constraints. Users provide high-level, vague  descriptions of their objectives, such as "develop a backend for an NFT marketplace." Once an objective is given, it's stored in Pinecone, a vector database that organizes tasks within a queue. The prioritisation agent, which is an OpenAI GPT-4 API call abstracts and decomposes this prompt into a list into a clear list of ordered tasks, which is then saved.

The task execution is carried out by a GPT 3.5 model that's been fine-tuned using SIP-009 smart contract examples. Specialised in Clarity NFT contracts, it's demonstrated better accuracy in code generation compared to the standard GPT model. It processes each task and produces a relevant string output adhering to the original prompt. Another advantage to this system is its memory retention, utilizing another vector database for long-term memory, it retains every task and corresponding result, preserving context across interactions - useful for long interactions and tasks with several stages.

Lastly there is a dynamic element called the task creation agent. This is another fine-tuned 3.5 model on the clarity docs and facilitates generating new 'sub-tasks' by evaluating the main goal and results of earlier tasks. Common operations of this model are clarity test commands. This continuous self prompting cycle happens until the limit is reach set by the user.

### Web UI Model
The web UI is a chat-GPT like interface developed using Vercel's AI library and SDK, enabling communication with the OpenAI API. Users sign in via their wallets with the assistance of StacksJS and can interact with the finely tuned model just like Chat-GPT. The video and your own testing can show the improvements of the fine tuning Vs the default Chat GPT. The user can send prompts to write clarity contracts, translate from rust/solidity to calrity, explain Clarity code or 1 click deploy to the stacks testnet, using StacksJS.

<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/44fc1fef-7373-4882-a234-f3750b4f3377" alt="image1">

### Web UI Interface

<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/1619bb63-e999-4af1-989d-fccfbe24c2b5" alt="image2" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/67e6b59a-2d26-4a84-902f-695759e17a08" alt="promptgif" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/26256c93-5fbe-47aa-9355-2ae8b4f3cdea" alt="prompt2" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/682ca6c8-81dc-45fa-8b83-581f6167e8d3" width="297" height="382">



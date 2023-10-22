# Auto-BTC - The First Autonomous Multi-Agent AI on Bitcoin

Think AutoGPT but fine-tuned on Atacks smart contracts and docs with Stacks JS and Clarinet allowing for autonomous multi-agent interaction on chain.

![autobtc](https://github.com/jjjutla/Auto-BTC/assets/22000925/95f77134-9481-44cc-bca0-a42c46e9a51c)

Watch the Video: https://www.youtube.com/watch?v=H4Y0irC582k 

# Why?
Despite having modern AI tools like GPT-4 and associated interfaces such as Cursor AI, which are capable of reading documents and engaging with code, there's still a noticeable gap in achieving optimal utilization of these systems. Examples like (XBTCBot)[https://xbtcbot.xyz/] and (w3gpt.ai)[http://w3pt.ai/] illustrate the potential for on-chain interactions, but there's a problem.

The main limitation often arises from our human interactions – the need to construct appropriate prompts and our problem-solving capability. As a result, we barely scratch the surface of the true intelligence and capability these models possess. For those new to the ecosystem, not knowing the right questions to ask or prompts to use can sometimes be detrimental rather than beneficial.

Enter Auto-BTC: a solution that goes beyond these challenges. It's not just one AI model but three, with two being finely tuned. These models are self-prompting and can recursively call themselves. This architecture eliminates the issue faced by newcomers to blockchain who might be unfamiliar with terms like 'smart contract' or 'NFT'. AutoBTC empowers users, allowing them to provide broad, high-level prompts. The system then autonomously generates a comprehensive task list to address the query, bridging the gap between complex technology and user understanding and by pairining it with StacksJS and Clarity, it can write, test deploy and interact with your smart contracts autonomously. 


# Features:
- **Intuitive Prompt System:** Users simply provide a general or high-level prompt about 'stacks', and our system, with the help of a finely tuned model and task creation mechanism, generates a clear and prioritized list of tasks to address, eliminating the need for manual coding or problem-solving.

- **Enhanced Memory:** Utilizing two vector databases (via Pinecone), we store the entire conversation thread. This addresses the common issue with most large language models where details can be forgotten over extended interactions.

- **Specialized GPT-3.5 Execution Model:** Tuned specifically for SP900 smart contracts, this model is equipped to:
  - Craft smart contracts based on a given prompt.
  - Break down and explain smart contract functionalities.
  - Develop tests tailored for smart contracts.
  - Convert and translate between Rust and Solidity smart contracts.
  - Diagnose and rectify issues in smart contracts.
  - Enhance and optimize smart contract performance.
  - Facilitate easy on-chain deployment and interactions with the aid of Stacks JS.

- **GPT-3.5 Task Creation Model:** Fine-tuned using the Clarinet documentation, this model possesses a deep understanding of testing and deployment procedures.

**GPT-4 API Integration:** Used to abstract information and produce comprehensive task lists efficiently.



# How it works?:
The autonomous multi-agent model is only available on the devnet in local mode, so you have to deploy a local node, host a pinecone db and connect your gpt api. 

<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/44fc1fef-7373-4882-a234-f3750b4f3377" alt="image1">

### Web UI Interface

<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/1619bb63-e999-4af1-989d-fccfbe24c2b5" alt="image2" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/67e6b59a-2d26-4a84-902f-695759e17a08" alt="promptgif" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/26256c93-5fbe-47aa-9355-2ae8b4f3cdea" alt="prompt2" width="297" height="382">
<img src="https://github.com/jjjutla/Auto-BTC/assets/22000925/682ca6c8-81dc-45fa-8b83-581f6167e8d3" width="297" height="382">



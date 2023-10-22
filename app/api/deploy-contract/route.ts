import { makeContractDeploy, broadcastTransaction, AnchorMode } from '@stacks/transactions';
import { StacksTestnet, StacksMainnet, StacksDevnet, StacksNetwork } from '@stacks/network';

export const runtime = 'edge'

export async function POST(req: Request) {
    const json = await req.json()
    const { networkName = 'testnet', contractName, sourceCode } = json

    console.log("request received:", json);

    // mainnet disabled for now
    const network: StacksNetwork = new StacksTestnet()

    const formattedContractName = contractName?.replace(/([a-z])([A-Z])/g, '$1-$2')?.toLowerCase();
    const senderKey = process.env.DEPLOYER_PRIVATE_KEY as string;

    const txOptions = {
        contractName: formattedContractName || 'jj-gpt-2',
        codeBody: sourceCode || COUNTER_CONTRACT,
        senderKey,
        network,
        anchorMode: AnchorMode.Any,
        fee: BigInt(1000),
    };

    try {
        const transaction = await makeContractDeploy(txOptions);
        const broadcastResponse = await broadcastTransaction(transaction, network);
        const txId = broadcastResponse.txid || broadcastResponse.error;
        const deploymentData = { networkName, txId }
        console.log("deploymentData:", deploymentData)
        return new Response(JSON.stringify(deploymentData));
    } catch (error) {
        const err = error as Error
        console.error(`Error in deployContract: ${err.message}`);
        return new Response(JSON.stringify({ error: `Error in deployContract: ${err.message}` }), { status: 500 });
    }
}

const COUNTER_CONTRACT = `;; counter
(define-data-var counter uint u1) ;; counter initialized to 1

(define-public (increment (step uint)) ;; increment counter, print new-val
    (let ((new-val (+ step (var-get counter)))) 
        (var-set counter new-val)
        (print { object: "counter", action: "incremented", value: new-val })
        (ok new-val)))

(define-public (decrement (step uint)) ;; decrement counter, print new-val
    (let ((new-val (- step (var-get counter)))) 
        (var-set counter new-val)
        (print { object: "counter", action: "decremented", value: new-val })
        (ok new-val)))

(define-read-only (read-counter) ;; read value of counter
    (ok (var-get counter)))`



    // Deployment of smart contract to stacks blockchain for the testnet. It processes input data, prepares the contract transaction and broadcats it to the network and returns the transaction ID or an error message.
    
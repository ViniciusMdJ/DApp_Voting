let TuringContract;

// 2. Set contract address and ABI
const Turing_Contract_Address = "";
const Turing_Contract_ABI = [];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);

    /* 3.1 Create instance of Turing smart contract */
    TuringContract = new ethers.Contract(
      Turing_Contract_Address,
      Turing_Contract_ABI,
      signer
    );
  });
});

// 4. Creating variables for reusable dom elements
const SelectPessoa = document.querySelector("#pessoas");
const qtdTuringsInput = document.querySelector("input[id='qtdTurings']");
const SelectMultiplier = document.querySelector("#exponential");
const voteBtn = document.querySelector("#vote");
const endVotingBtn = document.querySelector("#endVoting");
let TuringContract;

// 2. Set contract address and ABI
const Turing_Contract_Address = "";
const Turing_Contract_ABI = [];

// const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
//   provider.send("eth_requestAccounts", []).then(() => {
//     provider.listAccounts().then((accounts) => {
//       const signer = provider.getSigner(accounts[0]);

//     /* 3.1 Create instance of Turing smart contract */
//     TuringContract = new ethers.Contract(
//       Turing_Contract_Address,
//       Turing_Contract_ABI,
//       signer
//     );
//   });
// });

const SelectPessoa = document.querySelector("#pessoas");
const qtdTuringsInput = document.querySelector("input[id='qtdTurings']");
const SelectMultiplier = document.querySelector("#exponential");
const voteBtn = document.querySelector("#vote");
const endVotingBtn = document.querySelector("#endVoting");


function votar() {
  var qtdTurings = qtdTuringsInput.value;
  var pessoa = SelectPessoa.value;
  var multiplier = SelectMultiplier.value;
  var qtdTuringsFinal = qtdTurings * multiplier;

  // TuringContract.vote(pessoa, qtdTuringsFinal).then(() => {
  //   qtdTuringsInput.value = "";
  // }).catch((err) => {
  //   alert("Error in voting - " + err.message);
  // });
    
  console.log(pessoa, qtdTuringsFinal);
}

voteBtn.addEventListener("click", votar);

function changeMultiplier() {
  var multiplier = SelectMultiplier.value;
  qtdTuringsInput.setAttribute("max", (2*10**18) / multiplier);
}

SelectMultiplier.addEventListener("change", changeMultiplier);

function endVoting() {
  // TuringContract.endVoting().then(() => {
  //   alert("Voting ended");
  // }).catch((err) => {
  //   alert("Error in ending voting - " + err.message);
  // });
}

endVotingBtn.addEventListener("click", endVoting);
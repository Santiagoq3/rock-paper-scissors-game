import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./componentes/Modal";

function App() {
  const [count, setCount] = useState(0);
  const options = [
    {
      value: "paper",
      pathImage: "./images/icon-paper.svg",
      css: "w-32 h-32 absolute shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -top-12 left-4 md:left-20 flex items-center justify-center border-[16px] border-clr-paper-gradient bg-primary-color rounded-full",
      css2: "w-32 h-32 md:w-40 md:h-40   shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -top-12 left-4 flex items-center justify-center border-[16px] border-clr-paper-gradient bg-primary-color rounded-full",
      id: 1,
    },
    {
      value: "scissors",
      pathImage: "./images/icon-scissors.svg",
      css: "w-32 h-32 absolute shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -top-12 right-4 md:right-20 flex items-center justify-center border-[16px] border-clr-scissors-gradient bg-primary-color rounded-full",
      css2: "w-32 h-32 md:w-40 md:h-40  shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -top-12 right-4 flex items-center justify-center border-[16px] border-clr-scissors-gradient bg-primary-color rounded-full",
      id: 2,
    },
    {
      value: "rock",
      pathImage: "./images/icon-rock.svg",
      css: "w-32 h-32 absolute shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -bottom-6  flex items-center justify-center border-[16px] border-clr-rock-gradient bg-primary-color rounded-full",
      css2: "w-32 h-32 md:w-40 md:h-40  shadow-[inset_-1px_5px_0.5px_0px_rgba(0,0,0,0.22)] -bottom-6  flex items-center justify-center border-[16px] border-clr-rock-gradient bg-primary-color rounded-full",
      id: 3,
    },
  ];
  const [userOptionSelected, setuserOptionSelected] = useState<null | any>(
    null
  );
  const [computerOptionSelected, setComputerOptionSelected] = useState<
    null | any
  >(null);
  const [isOptionsShowed, setisOptionsShowed] = useState(true);
  const [isGameShowed, setGameShowed] = useState(false);
  const [isComputerThinking, setisComputerThinking] = useState(false);
  const [messageGameStatus, setmessageGameStatus] = useState(null);
  const [showModal, setshowModal] = useState(false);

  const checkWinner = (userOption, computerOption) => {
    console.log("userOption", userOption);
    console.log("computerOption", computerOption);
    if (userOption === computerOption) {
      return 0;
    }
    if (userOption === "scissors" && computerOption === "paper") {
      return 1;
    } else if (userOption === "paper" && computerOption === "rock") {
      return 1;
    } else if (userOption === "rock" && computerOption === "scissors") {
      return 1;
    } else {
      return 2;
    }
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const startGame = (userOption) => {
    const optionsName = ["paper", "scissors", "rock"];
    let computerOption = null;
    setisComputerThinking(true);

    setTimeout(() => {
      setisComputerThinking(false);
      let rndInteger = getRndInteger(0, 2);
      computerOption = optionsName[rndInteger];
      setComputerOptionSelected(options[rndInteger]);
      const winner = checkWinner(userOption, computerOption);
      if (winner === 1) {
        setCount(count + 1);
        setmessageGameStatus("You win");
      } else if (winner === 0) {
        setmessageGameStatus("Draw");
      } else {
        setmessageGameStatus("You lose");
      }
    }, 3000);
  };

  const restartGame = () => {
    setmessageGameStatus(null);
    setuserOptionSelected(null);
    setComputerOptionSelected(null);
    setGameShowed(false);
    setisOptionsShowed(true);
  };
  return (
    <>
      <div className=" font-Nunito bg-gradient-to-b	from-clr-radial-gradient-from to-clr-radial-gradient-to w-full min-h-screen">
        <div className="flex items-center justify-center p-6">
          <div className="flex w-full max-w-3xl items-center justify-between border-2 border-clr-header-outline p-4  	">
            <img className="w-24 h-24 " src="./images/logo.svg"></img>
            <div className="p-3 bg-primary-color w-[100px] rounded text-center">
              <p className="tracking-[0.08em] text-clr-score-text text-xs uppercase font-bold		">
                Score
              </p>
              <p className="text-6xl text-clr-dark-text font-bold">{count}</p>
            </div>
          </div>
        </div>
        <main className="p-6 w-full flex flex-col items-center  justify-center ">
          {isOptionsShowed && (
            <div className="flex w-[312px]  md:w-[500px] relative items-center justify-center mt-12 md:mt-28">
              <div className="">
                <img className="w-64 h-64" src="./images/bg-triangle.svg"></img>
              </div>
              {options.map((op) => {
                return (
                  <div
                    onClick={() => {
                      setuserOptionSelected(op);
                      setisOptionsShowed(false);
                      setGameShowed(true);
                      startGame(op.value);
                    }}
                    key={op.id}
                    className={op.css}
                  >
                    <img src={op.pathImage} />
                  </div>
                );
              })}
            </div>
          )}
          {isGameShowed && (
            <div className="md:mt-32">
              <div className=" flex items-center gap-12">
                <div className="flex items-center flex-col">
                  <div className={userOptionSelected.css2}>
                    <img src={userOptionSelected.pathImage} />
                  </div>
                  <p className="mt-5 uppercase tracking-[0.08em] text-primary-color text-center font-bold">
                    you picked
                  </p>
                </div>
                {messageGameStatus && (
                  <div className="mt-8 flex items-center flex-col hidden md:block">
                    <p className="text-center text-5xl text-primary-color uppercase font-bold">
                      {messageGameStatus}
                    </p>
                    <button
                      onClick={restartGame}
                      className="mt-4  bg-primary-color p-4 rounded-md w-52 uppercase tracking-[0.08em] text-clr-dark-text font-bold hover:text-[#DB2E4D] "
                    >
                      Play again
                    </button>
                  </div>
                )}
                {isComputerThinking ? (
                  <p className="mt-5 uppercase tracking-[0.08em] text-primary-color text-center font-bold">
                    Computer is thinking...
                  </p>
                ) : (
                  <div className="flex items-center flex-col">
                    <div className={computerOptionSelected.css2}>
                      <img src={computerOptionSelected.pathImage} />
                    </div>
                    <p className="mt-5 uppercase tracking-[0.08em] text-primary-color text-center font-bold">
                      computer picked
                    </p>
                  </div>
                )}
              </div>
              {messageGameStatus && (
                <div className="mt-8 flex items-center flex-col md:hidden">
                  <p className="text-center text-5xl text-primary-color uppercase font-bold ">
                    {messageGameStatus}
                  </p>
                  <button
                    onClick={restartGame}
                    className="mt-4  bg-primary-color p-4 rounded-md w-52 uppercase tracking-[0.08em] text-clr-dark-text font-bold"
                  >
                    Play again
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
        <div className="flex items-center justify-center md:justify-end md:mr-6 ">
          <button
            onClick={() => {
              setshowModal(true);
            }}
            className="border tracking-[0.08em] uppercase p-3 w-28 absolute bottom-5 text-primary-color rounded-sm font-bold hover:bg-primary-color hover:text-[#000]"
          >
            Rules
          </button>
        </div>
      </div>
      {showModal && <Modal setshowModal={setshowModal} />}
    </>
  );
}

export default App;

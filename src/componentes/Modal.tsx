interface Props {
  setshowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setshowModal }: Props) => {
  return (
    <div className="bg-black-rgba fixed w-screen h-screen z-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="p-8 z-10 bg-primary-color w-screen h-screen md:w-[400px] md:h-[415px] md:rounded-xl ">
          <div className="flex items-center justify-between">
            <h2 className="uppercase text-[#3B4262]-to font-bold text-3xl">
              rules
            </h2>
            <img
              onClick={() => {
                setshowModal(false);
              }}
              className="cursor-pointer"
              src="./images/icon-close.svg"
            />
          </div>
          <div className="w-full flex items-center justify-centers">
            <img className="mt-8 w-full" src="./images/image-rules.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

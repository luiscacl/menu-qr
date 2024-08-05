
type BackdropProps= {
    closeHandler: () => void;
    show: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({closeHandler, show}) => {
    return <>
        {show && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-20 bg-black z-10" onClick={closeHandler}>
            </div>
        )}
    </>
}

export default Backdrop;
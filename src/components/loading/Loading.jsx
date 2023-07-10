import Lottie from "lottie-react"
import loadingAtom from "../../assets/loading-atom.json" 

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Lottie animationData={loadingAtom} loop={true} className="w-[20%]" />
        </div>
    );
};

export default Loading;
import LoginChecker from "@/components/LoginChecker";
import {CameraView, useCameraPermissions} from "expo-camera"



const Fuel: React.FC = () => {
    return (
        <LoginChecker>
            <div>
                <h1>Fuel</h1>
            </div>
        </LoginChecker>
    );
};

export default Fuel;


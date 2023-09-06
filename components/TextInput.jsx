import { useState } from "react";

const TextInput = ({
    placeholder,
    inputName,
    register,
    error,
    maxCharacters = 3,
}) => {
    const [showInfo, setShowInfo] = useState(false);
    const inputInfo = {
        age: "target audience",
        genre: "It can be mystery, romance or fiction",
        type: "Can be tragedy, feel good, teaching story etc...",
    };
    return (
        <span className="input-container">
            <span
                className="info-button"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                i
            </span>
            <span
                className="input-info"
                style={showInfo ? { display: "flex" } : { display: "none" }}
            >
                {inputInfo[inputName]}
            </span>
            <span style={{ textTransform: "capitalize" }}>{inputName}</span>
            <input
                type="text"
                className="text-input"
                placeholder={placeholder}
                {...register(inputName, {
                    minLength: {
                        value: maxCharacters,
                        message: `The ${inputName} is too short`,
                    },
                    required: "This field is required",
                })}
            />
            {error && (
                <div style={{ color: "#ad1919", fontSize: "12px" }}>
                    <p>{error}</p>
                </div>
            )}
        </span>
    );
};

export default TextInput;

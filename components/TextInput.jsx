const TextInput = ({ placeholder, inputName, register, error }) => {
    return (
        <span>
            <input
                type="text"
                className="text-input"
                placeholder={placeholder}
                {...register(inputName, {
                    minLength: {
                        value: 3,
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

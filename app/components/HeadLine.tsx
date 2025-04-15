const HeadLine: React.FC = () => {


    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginBottom: "0.7104em"
        }} className="text-3xl font-semibold mb-6  pb-2 font-noto">

            <span color="#000000" style={{
                display: "flex",
                height: "1.1em",
                width: "1.1em",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "1rem"
            }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "1em", width: "auto", fill: "rgb(0, 0, 0)", stroke: "rgb(0, 0, 0)" }}><path d="M0 224.2C0 100.6 100.2 0 224 0h32c95.2 0 174.2 69.3 189.4 160.1c2.2 13 6.7 25.7 15 36.1l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM285.3 208H336c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48c5.6 0 11-1 16-2.7V288c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3c5 1.8 10.4 2.7 16 2.7c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16zM160 176v2.7l-.1 0c0-.9 .1-1.8 .1-2.7z"></path></svg>
            </span>
            <span >Skills</span>
        </div>
    )
}
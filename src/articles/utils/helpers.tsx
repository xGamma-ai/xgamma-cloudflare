import style from "../common.module.css"
export const ImageHelper = ({ imageString }: { imageString: string }) => {
    return <img className={style.imageController} src={imageString} alt="KMP Client" width={400} />
}

export const CodeBlock = ({ code }: { code: string }) => {
    return <pre className={style.codeblock}>
        <code >
            {
                code
            }
        </code>
    </pre>
}
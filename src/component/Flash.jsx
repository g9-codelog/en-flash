import { useState } from "react"

const Words = [
    {en:"dog", ja:"犬"},
    {en:"cat", ja:"猫"},
    {en:"pig", ja:"豚"},
    {en:"bird", ja:"鳥"},
    {en:"one", ja:"１"},
    {en:"two", ja:"２"},
    {en:"three", ja:"３"},
    {en:"four", ja:"４"}
]
let WordIndex = 0
function Flash() {
    const [EnFlash, setEnFlash] = useState(Words[0].en)
    const [JaFlash, setJaFlash] = useState(Words[0].ja)
    const [IsShow, setIsShow] = useState(false)
    function handleShow() {
        setIsShow(true)
    }
    function Next() {
        WordIndex = WordIndex + 1
        setEnFlash(Words[WordIndex].en)
        setJaFlash(Words[WordIndex].ja)
        setIsShow(false)
    }
    return(
        <div>
            <p suppressHydrationWarning={true}>{EnFlash}</p>
            {IsShow ? <p suppressHydrationWarning={true}>{JaFlash}</p> :
                <div>
                    <button onClick={handleShow}>日本語</button>
                    <br />
                </div>
            }
            <button onClick={Next}>次へ</button>
        </div>
    )
}

export default Flash;
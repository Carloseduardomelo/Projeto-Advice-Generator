import { useEffect , useState } from "react"
import foto from '../assets/images/pattern-divider-desktop.svg'
import fotoButoon from '../assets/images//icon-dice.svg'
const Card = () => {

    const [ dadosFrase , setDadosFrase ] = useState([])
    const [ id , setId ] = useState('1')

    const frase =  async () => {
        const dados = await fetch('https://api.adviceslip.com/advice').then(res => res.json())
        setDadosFrase(dados.slip.advice)
        setId(dados.slip.id)
    }

    useEffect(() => {
        frase()
    },[])

    return(
        <div className="w-[370px] flex items-center justify-center gap-12 flex-col bg-slate-700 p-10 rounded-xl">
            <p className="text-lime-500">ADVICE  #{id}</p>
            <p className="text-white text-xl text-center w-[90%]">{dadosFrase}</p>
            <img src={foto} alt="" />
            <p className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-500 cursor-pointer" onClick={frase}><img src={fotoButoon} alt="" /></p>
        </div>
    )
}

export default Card
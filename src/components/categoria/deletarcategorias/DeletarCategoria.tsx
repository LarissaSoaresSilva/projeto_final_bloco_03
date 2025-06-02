import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { RotatingLines } from "react-loader-spinner"


function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

   async function deletarCategoria() {
    setIsLoading(true)

    try {
        await deletar(`/categoria/${id}`)
        ToastAlerta("Categoria apagada com sucesso", "sucesso")
        retornar()
    } catch (error: any) {
        ToastAlerta("Erro ao deletar a categoria.", "erro")
    } finally {
        setIsLoading(false)
    }
}

    function retornar() {
        navigate("/categoria")
    }
    
  return (
    <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl  text-amber-700 text-center my-4'>Deletar categoria</h1>
            <p className='  text-amber-700 text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border border-red-700 flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-4 px-6 bg-gradient-to-r from-yellow-100 to-yellow-400 text-red-500 font-bold text-2xl'>
                    Categoria
                </header>
                <div className="w-full h-full bg-amber-50">
                <p className='p-4 text-center font-bold text-3xl text-red-400 '>{categoria.tipo}</p>
                <p className='p-4 text-justify text-2xl text-red-400 '>{categoria.descricao}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100  bg-amber-300 hover:bg-amber-400
                         flex items-center justify-center'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
  )
}

export default DeletarCategoria

import type Categoria from "../../../models/Categoria";
import { useEffect, useState, type ChangeEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {

      const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

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

     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categoria")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        

     if (id !== undefined) {
    try {
        await atualizar(`/categoria`, categoria, setCategoria)
        ToastAlerta("A categoria foi atualizada com sucesso!", "sucesso")
    } catch (error: any) {
        ToastAlerta("Erro ao atualizar a categoria", "erro")
    }
} else {
    try {
        await cadastrar(`/categoria`, categoria, setCategoria)
        ToastAlerta("A categoria foi cadastrada com sucesso!", "sucesso")
    } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a categoria", "erro")
    }
}
        setIsLoading(false)
        retornar()
    }
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-amber-700 text-center my-8">
              {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2 text-amber-700 ">
                    <label htmlFor="tipo">Determine o Tipo:</label>
                    <input
                        type="text"
                        placeholder="Qual o tipo?"
                        name='tipo'
                        className="border-2 border-red-700 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição do Tipo</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sobre"
                        name='descricao'
                        className="border-2 border-red-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-amber-300 hover:bg-amber-400 
                     w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                {isLoading ? (
    <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="24"
        visible={true}
    />
) : (
    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
)}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
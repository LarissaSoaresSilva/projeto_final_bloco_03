import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import type Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardcategorias/CardCategorias';
import { DNA } from "react-loader-spinner";

function ListarCategorias() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categoria', setCategoria)
        } catch (error: any) {
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categoria.length])

    return (
        <>
            {categoria.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                                          {categoria.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias
import { Link } from "react-router"
import type Categoria from "../../../models/Categoria"

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriasProps) {
    return (
        <div className='border border-red-700 flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-gradient-to-r from-yellow-100 to-yellow-400 text-red-500 font-bold text-2xl'>
                Categoria
            </header>
            <div className="w-full h-full bg-amber-50">
            <p className='p-4 text-center font-bold text-3xl text-red-400 '>{categoria.tipo}</p>
            <p className='p-4 text-justify text-2xl text-red-400'>{categoria.descricao}</p>
            </div>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-amber-300 hover:bg-amber-400
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 
                className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias
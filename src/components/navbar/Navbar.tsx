import { Link, useNavigate } from "react-router"

function Navbar() {

    const navigate = useNavigate();

    function logout() {

        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-6
            			  bg-gradient-to-r from-yellow-100 to-yellow-400  text-red-500'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">FarmaBem</Link>

                    <div className='flex gap-6 '>
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastrar' className='hover:underline'>Cadastrar</Link>
                        <Link to='' onClick={logout} className='hover:underline'> Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-6
            			  bg-gradient-to-r from-yellow-100 to-yellow-400  text-red-500'>

                <div className="container flex justify-between text-lg">
                    FarmaBem

                    <div className='flex gap-6'>
                        Home
                        Categoria
                        Cadastrar
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
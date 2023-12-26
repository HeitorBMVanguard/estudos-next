interface ProductProps{
    params: {
        id : string
    }
}

export const metadata = {
    title: 'Produto 1',
  }

export default function Product ({params} : ProductProps){
    return <h1> Product: {params.id}</h1>
}
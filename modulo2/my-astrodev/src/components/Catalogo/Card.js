import { getMouseEventOptions } from "@testing-library/user-event/dist/utils"
import styled from "styled-components"



const List = styled.div`
    margin-top: 2rem;
`

const Card = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    padding-top: 20px;
    border-radius: 35px;

    img {
        width: 300px;
        border-radius: 35px;
    }
`

const Title = styled.p`
    font-weight: bold;
    font-size: 48px;
    margin: 0;

`

export function CardShirt() {

    const Camisas = [
        {
            image: "https://img.lojasrenner.com.br/item/549031453/large/3.jpg",
            Nome: 'Abdução',
            price: '56.00'
        },
        {
            image: "https://img.elo7.com.br/product/zoom/2DC5A28/camiseta-geek-nasa-primeiro-voo-onibus-espacial.jpg",
            Nome: 'Columbia Flight',
            price: '28.30'
        },
        {
            image: "https://cdn.awsli.com.br/600x1000/281/281967/produto/32377145/a220e6ac92.jpg",
            Nome: 'Space Doodles',
            price: '45.40'
        },
        {
            image: "https://a-static.mlcdn.com.br/618x463/camisa-camiseta-astronauta-cosmonauta-viagem-espacial-hd-8-estilo-kraken/krakenmoda/78764c02090811ec9fd24201ac185013/ce8013393a3552a5eb3128ab1f943a16.jpg",
            Nome: 'just float, just relaX',
            price: '55.50'
        },
        {
            image: "https://images-americanas.b2w.io/produtos/01/00/img/41515/9/41515933_1GG.jpg",
            Nome: 'Black Space Doodles',
            price: '45.40'
        }
    ]

    return(
        <List>
            {Camisas.map(camisa => {
                return (
                    <Card>
                        <img src={camisa.image} />
                        <Title>{camisa.Nome}</Title>
                        <p>R$ ${camisa.price}</p>
                    </Card>
                )
            })}
        </List>
    )
}
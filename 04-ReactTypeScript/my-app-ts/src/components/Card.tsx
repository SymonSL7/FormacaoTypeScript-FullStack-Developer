interface ICard {
    id: number,
    paragrafo: string,
    detalhes: string

}

export const Card = ({ id, paragrafo, detalhes }: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <p>{paragrafo}</p>
            <p>{detalhes}</p>
        </div>
    )
}
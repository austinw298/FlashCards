

const Card = ({props}) => {
    const test = props.map((card) => {
        return <tr>
            <td>{card.title}</td>
            <td>{card.word}</td>
        </tr>
    })
    return ( 
        <section>
            <tbody>
                {test}
            </tbody>

        </section>
     );
}
 
export default Card;
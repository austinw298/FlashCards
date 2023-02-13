

const Card = ({props}) => {
    const cards = props.map((card) => {
        return <tr>
            <td>{card.title}</td>
        </tr>
    })
    return ( 
        <section>
            <tbody>
               
            </tbody>

        </section>
     );
}
 
export default Card;
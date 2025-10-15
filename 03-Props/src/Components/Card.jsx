
const Card = (props) => {

    return (
        <div>
            <div className="card">
                <img src={props.img} alt="" />
                <h1>{props.user},{props.age}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <button>View Profile</button>
            </div>


        </div>
    )
}

export default Card
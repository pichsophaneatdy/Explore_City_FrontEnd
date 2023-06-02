import "./MenuAccordion.scss";
import addBtn from "../../assets/icons/right-arrow.png";
const MenuAccordion = ({categories, setCurrentCategory}) => {
    return (
        <div className="accordion">
            {
                categories.map((category) => {
                    const {id, name} = category;
                    return (
                        <div onClick={()=>setCurrentCategory(category)} key={id} className="accordion__item">
                            <p className="accordion__text">{name}</p>
                            <img className="accordion__btn" src={addBtn} alt="Add Btn"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuAccordion
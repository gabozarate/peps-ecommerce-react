import {Item} from '../Item'

const ItemList = ({listproducts}) => {
    return (

        <> 
            {listproducts.map((prod, i)=> <Item key={`${prod.product}-${i}`} product={prod} />)}
        </>
    )
    
}
export { ItemList }
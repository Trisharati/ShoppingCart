export const reducer=(state,action) =>{

    if(action.type == 'ADD'){
        console.log(state.cartData);
        
        return {
            ...state,
            cartData : [...state.cartData,{...action.payload,qty : 1}]
            
        }
        
    }
    if(action.type == 'INCREASE'){
        
        return {
            ...state,
            cartData : state.cartData.filter(item=>{
                return item.id === action.payload ? (item.qty += 1) : item
            })
            
        }
    } 
    if(action.type == 'DECREASE'){
        return {
            ...state,
            cartData : state.cartData.filter(item=>{
                return item.id === action.payload ? (item.qty -= 1) : item
        })
            
        }
    } 
    if(action.type == 'REMOVE'){
        return {
            ...state,
            cartData : state.cartData.filter((item)=>{
                return item.id != action.payload 
            })
            
        }
    } 

    }
